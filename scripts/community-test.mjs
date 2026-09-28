import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { AccountStore, hashPassword, normalizeChatMessage, normalizeReportDetails } from "../worker.js";

assert.equal(normalizeChatMessage("  Great   run!  "), "Great run!");
assert.throws(() => normalizeChatMessage("Visit https://example.com"), /Links are not allowed/);
assert.throws(() => normalizeChatMessage("Email me at player@example.com"), /email addresses or phone numbers/);
assert.throws(() => normalizeChatMessage("Call 555-123-4567"), /email addresses or phone numbers/);
assert.equal(normalizeReportDetails("line one\r\nline two"), "line one\nline two");

const legacySchemaDatabase = new DatabaseSync(":memory:");
legacySchemaDatabase.exec(`
  CREATE TABLE users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    username TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);
const legacySchemaSql = {
  exec(query, ...bindings) {
    if (query.trimStart().startsWith("CREATE TABLE")) {
      legacySchemaDatabase.exec(query);
      return { toArray: () => [] };
    }
    const rows = legacySchemaDatabase.prepare(query).all(...bindings);
    return { toArray: () => rows };
  },
};
new AccountStore({ storage: { sql: legacySchemaSql } });
assert.ok(
  legacySchemaSql.exec("PRAGMA table_info(users)").toArray()
    .some((column) => column.name === "display_name"),
  "Existing account databases should gain the display_name column."
);
legacySchemaDatabase.close();

const database = new DatabaseSync(":memory:");
const sql = {
  exec(query, ...bindings) {
    if (query.trimStart().startsWith("CREATE TABLE")) {
      database.exec(query);
      return { toArray: () => [] };
    }
    const rows = database.prepare(query).all(...bindings);
    return { toArray: () => rows };
  },
};
const sentPlayerReports = [];
const sentIssueReports = [];
const store = new AccountStore(
  {
    storage: {
      sql,
      async getAlarm() { return null; },
      async setAlarm() {},
    },
  },
  {
    PLAYER_REPORT_EMAIL: {
      async send(message) { sentPlayerReports.push(message); },
    },
    ISSUE_REPORT_EMAIL: {
      async send(message) { sentIssueReports.push(message); },
    },
  }
);

function sessionCookie(response) {
  return response.headers.get("Set-Cookie").split(";")[0];
}

async function api(path, { method = "GET", body, cookie = "" } = {}) {
  return store.fetch(new Request(`https://retrorun.test${path}`, {
    method,
    headers: {
      Origin: "https://retrorun.test",
      ...(cookie ? { Cookie: cookie } : {}),
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  }));
}

const displayNames = {
  alice_chat: "Alice Runner",
  bob_chat: "Bob Runner",
  charlie_chat: "Charlie Runner",
};

async function createAccount(tag) {
  const username = displayNames[tag] || `Player ${tag.replaceAll("_", " ")}`;
  const response = await api("/api/auth/signup", {
    method: "POST",
    body: {
      username,
      tag,
      password: "test-password-42",
      confirmPassword: "test-password-42",
    },
  });
  assert.equal(response.status, 201);
  return sessionCookie(response);
}

try {
  assert.equal((await api("/api/chat")).status, 401);
  assert.equal((await api("/api/social")).status, 401);
  assert.equal((await api("/api/social/search?q=chat")).status, 401);
  assert.equal((await api("/api/friend-chats")).status, 401);
  assert.equal((await api("/api/friend-chats/messages?conversationId=missing")).status, 401);
  assert.equal((await api("/api/reports/issue", {
    method: "POST",
    body: { category: "bug", details: "The game froze during a run." },
  })).status, 401);

  assert.equal((await api("/api/auth/signup", {
    method: "POST",
    body: {
      username: "Mismatch Player",
      tag: "mismatch_player",
      password: "test-password-42",
      confirmPassword: "different-password-42",
    },
  })).status, 400);

  const legacyCredentials = await hashPassword("legacy-password-42");
  sql.exec(
    `INSERT INTO users (
       id, email, username, display_name, password_salt, password_hash, created_at
     ) VALUES (?, ?, ?, NULL, ?, ?, ?)`,
    "legacy-user-id",
    "legacy_tag@accounts.retrorun.invalid",
    "legacy_tag",
    legacyCredentials.salt,
    legacyCredentials.hash,
    Date.now()
  );
  const legacySignin = await api("/api/auth/signin", {
    method: "POST",
    body: { tag: "legacy_tag", password: "legacy-password-42" },
  });
  assert.equal(legacySignin.status, 200);
  const legacyIdentity = await legacySignin.json();
  assert.deepEqual(legacyIdentity, {
    authenticated: true,
    username: "",
    tag: "legacy_tag",
    profileComplete: false,
  });
  const legacyCookie = sessionCookie(legacySignin);
  assert.equal((await api("/api/saves", { cookie: legacyCookie })).status, 428);
  assert.equal((await api("/api/auth/profile", {
    method: "POST",
    cookie: legacyCookie,
    body: { username: "legacy_tag" },
  })).status, 400);
  const legacyUpdate = await api("/api/auth/profile", {
    method: "POST",
    cookie: legacyCookie,
    body: { username: "Legacy Runner" },
  });
  assert.equal(legacyUpdate.status, 200);
  assert.deepEqual(await legacyUpdate.json(), {
    authenticated: true,
    username: "Legacy Runner",
    tag: "legacy_tag",
    profileComplete: true,
  });
  assert.equal((await api("/api/auth/profile", {
    method: "POST",
    cookie: legacyCookie,
    body: { username: "Changed Runner" },
  })).status, 409);
  assert.deepEqual(await (await api("/api/auth/session", { cookie: legacyCookie })).json(), {
    authenticated: true,
    username: "Legacy Runner",
    tag: "legacy_tag",
    profileComplete: true,
  });

  const aliceCookie = await createAccount("alice_chat");
  const bobCookie = await createAccount("bob_chat");
  const charlieCookie = await createAccount("charlie_chat");

  const similarSearch = await api("/api/social/search?q=chat", { cookie: aliceCookie });
  assert.equal(similarSearch.status, 200);
  assert.deepEqual(await similarSearch.json(), {
    query: "chat",
    players: [
      {
        username: "Bob Runner",
        tag: "bob_chat",
        following: false,
        followsYou: false,
        friend: false,
      },
      {
        username: "Charlie Runner",
        tag: "charlie_chat",
        following: false,
        followsYou: false,
        friend: false,
      },
    ],
    maximumResults: 20,
  });
  const exactSearch = await (await api("/api/social/search?q=bob_chat", {
    cookie: aliceCookie,
  })).json();
  assert.equal(exactSearch.players.length, 1);
  assert.equal(exactSearch.players[0].tag, "bob_chat");
  assert.deepEqual(
    (await (await api("/api/social/search?q=alice_", { cookie: aliceCookie })).json()).players,
    [],
    "Search should exclude the current player and treat underscores literally."
  );
  assert.equal((await api("/api/social/search?q=bad-tag!", { cookie: aliceCookie })).status, 400);
  assert.deepEqual(
    await (await api("/api/social/search", { cookie: aliceCookie })).json(),
    { query: "", players: [] }
  );

  const aliceFollowsBob = await api("/api/social/follow", {
    method: "POST",
    cookie: aliceCookie,
    body: { username: "bob_chat" },
  });
  assert.equal(aliceFollowsBob.status, 201);
  assert.deepEqual(await aliceFollowsBob.json(), {
    username: "Bob Runner",
    tag: "bob_chat",
    following: true,
    followsYou: false,
    friend: false,
  });
  const followedSearch = await (await api("/api/social/search?q=bob", {
    cookie: aliceCookie,
  })).json();
  assert.equal(followedSearch.players[0].following, true);
  assert.equal(followedSearch.players[0].friend, false);
  assert.equal((await api("/api/social/follow", {
    method: "POST",
    cookie: aliceCookie,
    body: { username: "bob_chat" },
  })).status, 200);
  const aliceSocial = await (await api("/api/social", { cookie: aliceCookie })).json();
  assert.equal(aliceSocial.friends.length, 0);
  assert.equal(aliceSocial.following[0].username, "Bob Runner");
  assert.equal(aliceSocial.following[0].tag, "bob_chat");
  assert.equal(aliceSocial.followers.length, 0);
  assert.equal((await api("/api/social/follow", {
    method: "POST",
    cookie: aliceCookie,
    body: { username: "alice_chat" },
  })).status, 400);
  assert.equal((await api("/api/social/follow", {
    method: "POST",
    cookie: aliceCookie,
    body: { username: "missing_player" },
  })).status, 404);

  const sent = await api("/api/chat", {
    method: "POST",
    cookie: aliceCookie,
    body: { message: "Great run, Bob!" },
  });
  assert.equal(sent.status, 201);
  const sentMessage = (await sent.json()).message;
  assert.equal(sentMessage.username, "Alice Runner");
  assert.equal(sentMessage.tag, "alice_chat");

  const linkAttempt = await api("/api/chat", {
    method: "POST",
    cookie: aliceCookie,
    body: { message: "Visit https://example.com" },
  });
  assert.equal(linkAttempt.status, 400);

  const bobRead = await api("/api/chat", { cookie: bobCookie });
  assert.equal(bobRead.status, 200);
  const bobMessages = (await bobRead.json()).messages;
  assert.equal(bobMessages.length, 1);
  assert.equal(bobMessages[0].mine, false);
  assert.equal(bobMessages[0].following, false);
  assert.equal(bobMessages[0].followsYou, true);
  assert.equal(bobMessages[0].friend, false);

  const bobFollowsAlice = await api("/api/social/follow", {
    method: "POST",
    cookie: bobCookie,
    body: { username: "alice_chat" },
  });
  assert.equal(bobFollowsAlice.status, 201);
  assert.equal((await bobFollowsAlice.json()).friend, true);
  const friendSearch = await (await api("/api/social/search?q=alice", {
    cookie: bobCookie,
  })).json();
  assert.equal(friendSearch.players[0].friend, true);
  const bobSocial = await (await api("/api/social", { cookie: bobCookie })).json();
  assert.equal(bobSocial.friends[0].username, "Alice Runner");
  assert.equal(bobSocial.friends[0].tag, "alice_chat");
  assert.equal(bobSocial.following[0].friend, true);
  assert.equal(bobSocial.followers[0].friend, true);

  const aliceDirect = await api("/api/friend-chats", {
    method: "POST",
    cookie: aliceCookie,
    body: { usernames: ["bob_chat"] },
  });
  assert.equal(aliceDirect.status, 201);
  const directConversation = (await aliceDirect.json()).conversation;
  assert.equal(directConversation.type, "direct");
  assert.deepEqual(directConversation.members, ["alice_chat", "bob_chat"]);

  const duplicateDirect = await api("/api/friend-chats", {
    method: "POST",
    cookie: bobCookie,
    body: { usernames: ["alice_chat"] },
  });
  assert.equal(duplicateDirect.status, 200);
  assert.equal((await duplicateDirect.json()).conversation.id, directConversation.id);

  assert.equal((await api("/api/friend-chats", {
    method: "POST",
    cookie: aliceCookie,
    body: { usernames: ["charlie_chat"] },
  })).status, 403);
  assert.equal((await api(`/api/friend-chats/messages?conversationId=${directConversation.id}`, {
    cookie: charlieCookie,
  })).status, 404);

  const privateMessageResponse = await api("/api/friend-chats/messages", {
    method: "POST",
    cookie: bobCookie,
    body: { conversationId: directConversation.id, message: "Private hello, Alice!" },
  });
  assert.equal(privateMessageResponse.status, 201);
  const privateMessage = (await privateMessageResponse.json()).message;
  const alicePrivateMessages = await api(
    `/api/friend-chats/messages?conversationId=${directConversation.id}`,
    { cookie: aliceCookie }
  );
  assert.equal(alicePrivateMessages.status, 200);
  assert.equal((await alicePrivateMessages.json()).messages[0].body, "Private hello, Alice!");

  const privateReport = await api("/api/reports/player", {
    method: "POST",
    cookie: aliceCookie,
    body: { messageId: privateMessage.id, reason: "spam", details: "Private chat report test." },
  });
  assert.equal(privateReport.status, 201);
  assert.equal(sentPlayerReports.length, 1);
  assert.match(sentPlayerReports[0].text, /Location: Friend chat/);

  for (const [cookie, username] of [
    [aliceCookie, "charlie_chat"],
    [charlieCookie, "alice_chat"],
  ]) {
    assert.ok([200, 201].includes((await api("/api/social/follow", {
      method: "POST",
      cookie,
      body: { username },
    })).status));
  }
  const groupResponse = await api("/api/friend-chats", {
    method: "POST",
    cookie: aliceCookie,
    body: { usernames: ["bob_chat", "charlie_chat"] },
  });
  assert.equal(groupResponse.status, 201);
  assert.equal((await groupResponse.json()).conversation.members.length, 3);
  assert.equal((await api("/api/friend-chats", {
    method: "POST",
    cookie: aliceCookie,
    body: { usernames: Array.from({ length: 10 }, (_, index) => `friend_${index}`) },
  })).status, 409);
  const aliceConversations = await (await api("/api/friend-chats", { cookie: aliceCookie })).json();
  assert.equal(aliceConversations.conversations.length, 2);
  assert.equal(aliceConversations.maximumMembers, 10);

  const bobUnfollowsAlice = await api("/api/social/unfollow", {
    method: "POST",
    cookie: bobCookie,
    body: { username: "alice_chat" },
  });
  assert.equal(bobUnfollowsAlice.status, 200);
  assert.deepEqual(await bobUnfollowsAlice.json(), {
    username: "Alice Runner",
    tag: "alice_chat",
    following: false,
    followsYou: true,
    friend: false,
  });

  const playerReport = await api("/api/reports/player", {
    method: "POST",
    cookie: bobCookie,
    body: {
      messageId: sentMessage.id,
      reason: "harassment",
      details: "Please review this message.",
    },
  });
  assert.equal(playerReport.status, 201);
  assert.equal((await playerReport.json()).emailSent, true);
  assert.equal(sentPlayerReports.length, 2);
  assert.equal(sentPlayerReports[1].to, "reports@retrorun.win");
  assert.match(sentPlayerReports[1].text, /Reported player: Alice Runner \(@alice_chat\)/);
  assert.match(sentPlayerReports[1].text, /Message: Great run, Bob!/);

  assert.equal((await api("/api/reports/player", {
    method: "POST",
    cookie: bobCookie,
    body: { messageId: sentMessage.id, reason: "spam" },
  })).status, 409);
  assert.equal((await api("/api/reports/player", {
    method: "POST",
    cookie: aliceCookie,
    body: { messageId: sentMessage.id, reason: "other" },
  })).status, 400);

  const issueReport = await api("/api/reports/issue", {
    method: "POST",
    cookie: aliceCookie,
    body: {
      category: "display",
      details: "The game canvas looks squeezed on my monitor.",
      gameId: "gridiron",
      device: "desktop",
      viewport: "1920x1080",
    },
  });
  assert.equal(issueReport.status, 201);
  assert.equal((await issueReport.json()).emailSent, true);
  assert.equal(sentIssueReports.length, 1);
  assert.equal(sentIssueReports[0].to, "updates@retrorun.win");
  assert.match(sentIssueReports[0].text, /Game: Gridiron Dash/);
  assert.match(sentIssueReports[0].text, /1920x1080/);

  for (let index = 0; index < 5; index += 1) {
    assert.equal((await api("/api/chat", {
      method: "POST",
      cookie: aliceCookie,
      body: { message: `Message ${index + 2}` },
    })).status, 201);
  }
  assert.equal((await api("/api/chat", {
    method: "POST",
    cookie: aliceCookie,
    body: { message: "One message too many" },
  })).status, 429);

  const storedReports = sql.exec(
    "SELECT report_type, email_status FROM community_reports ORDER BY created_at"
  ).toArray().map((report) => ({ ...report }));
  assert.deepEqual(storedReports, [
    { report_type: "player", email_status: "sent" },
    { report_type: "player", email_status: "sent" },
    { report_type: "issue", email_status: "sent" },
  ]);
  console.log("Retro Run Locker Room, friend chat, and report tests passed.");
} finally {
  database.close();
}
