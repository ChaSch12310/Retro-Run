import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { AccountStore, normalizeChatMessage, normalizeReportDetails } from "../worker.js";

assert.equal(normalizeChatMessage("  Great   run!  "), "Great run!");
assert.throws(() => normalizeChatMessage("Visit https://example.com"), /Links are not allowed/);
assert.throws(() => normalizeChatMessage("Email me at player@example.com"), /email addresses or phone numbers/);
assert.throws(() => normalizeChatMessage("Call 555-123-4567"), /email addresses or phone numbers/);
assert.equal(normalizeReportDetails("line one\r\nline two"), "line one\nline two");

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

async function createAccount(username) {
  const response = await api("/api/auth/signup", {
    method: "POST",
    body: { username, passcode: "test-passcode-42" },
  });
  assert.equal(response.status, 201);
  return sessionCookie(response);
}

try {
  assert.equal((await api("/api/chat")).status, 401);
  assert.equal((await api("/api/social")).status, 401);
  assert.equal((await api("/api/friend-chats")).status, 401);
  assert.equal((await api("/api/friend-chats/messages?conversationId=missing")).status, 401);
  assert.equal((await api("/api/reports/issue", {
    method: "POST",
    body: { category: "bug", details: "The game froze during a run." },
  })).status, 401);

  const aliceCookie = await createAccount("alice_chat");
  const bobCookie = await createAccount("bob_chat");

  const aliceFollowsBob = await api("/api/social/follow", {
    method: "POST",
    cookie: aliceCookie,
    body: { username: "bob_chat" },
  });
  assert.equal(aliceFollowsBob.status, 201);
  assert.deepEqual(await aliceFollowsBob.json(), {
    username: "bob_chat",
    following: true,
    followsYou: false,
    friend: false,
  });
  assert.equal((await api("/api/social/follow", {
    method: "POST",
    cookie: aliceCookie,
    body: { username: "bob_chat" },
  })).status, 200);
  const aliceSocial = await (await api("/api/social", { cookie: aliceCookie })).json();
  assert.equal(aliceSocial.friends.length, 0);
  assert.equal(aliceSocial.following[0].username, "bob_chat");
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
  assert.equal(sentMessage.username, "alice_chat");

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
  const bobSocial = await (await api("/api/social", { cookie: bobCookie })).json();
  assert.equal(bobSocial.friends[0].username, "alice_chat");
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

  const charlieCookie = await createAccount("charlie_chat");
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
    username: "alice_chat",
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
  assert.match(sentPlayerReports[1].text, /Reported player: @alice_chat/);
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
