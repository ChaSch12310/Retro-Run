import assert from "node:assert/strict";
import worker, {
  SAVE_KEYS,
  confirmationEmail,
  duplicateEmailsAllowed,
  hashPassword,
  mergeSaveBundles,
  normalizeEmail,
  normalizeSaveBundle,
  normalizeUsername,
  verifyPassword,
} from "../worker.js";
import siteWorker from "../site-worker.js";

assert.equal(normalizeEmail("  Player@Example.COM  "), "player@example.com");
assert.equal(normalizeUsername("  Player_One  "), "player_one");
assert.equal(SAVE_KEYS.length, 10);
assert.equal(duplicateEmailsAllowed("true"), true);
assert.equal(duplicateEmailsAllowed("false"), false);

const emailMessage = confirmationEmail({
  email: "player@example.com",
  username: "Player<One>",
  confirmationUrl: "https://preview.example/api/auth/confirm?token=abc&next=1",
});
assert.equal(emailMessage.to, "player@example.com");
assert.deepEqual(emailMessage.from, {
  email: "retrorun@schwartzdev.com",
  name: "Retro Run",
});
assert.match(emailMessage.subject, /Confirm your Retro Run account/);
assert.match(emailMessage.text, /expires in 24 hours/);
assert.match(emailMessage.html, /Player&lt;One&gt;/);
assert.match(emailMessage.html, /token=abc&amp;next=1/);

const credentials = await hashPassword("strong-pass-42");
assert.equal(await verifyPassword("strong-pass-42", credentials.salt, credentials.hash), true);
assert.equal(await verifyPassword("wrong-pass-42", credentials.salt, credentials.hash), false);

const first = normalizeSaveBundle(null);
first.games[SAVE_KEYS[0]][0] = {
  data: { savedAt: 100, franchise: { team: { name: "Old Team" } } },
  updatedAt: 100,
};
first.games[SAVE_KEYS[1]][2] = {
  data: { savedAt: 500, franchise: { team: { name: "Local Leader" } } },
  updatedAt: 500,
};

const second = normalizeSaveBundle(null);
second.games[SAVE_KEYS[0]][0] = {
  data: { savedAt: 300, franchise: { team: { name: "New Team" } } },
  updatedAt: 300,
};
second.games[SAVE_KEYS[1]][2] = { data: null, updatedAt: 400 };
second.games[SAVE_KEYS[2]][4] = { data: null, updatedAt: 900 };

const merged = mergeSaveBundles(first, second);
assert.equal(merged.games[SAVE_KEYS[0]][0].data.franchise.team.name, "New Team");
assert.equal(merged.games[SAVE_KEYS[1]][2].data.franchise.team.name, "Local Leader");
assert.equal(merged.games[SAVE_KEYS[2]][4].data, null);
assert.equal(merged.games[SAVE_KEYS[2]][4].updatedAt, 900);

const health = await worker.fetch(new Request("https://retrorun.win/api/health"), {});
assert.equal(health.status, 200);
assert.deepEqual(await health.json(), {
  ok: true,
  service: "retro-run-cloud-saves",
  emailConfirmation: false,
  duplicateEmailTest: false,
});

let forwardedUrl = "";
const proxiedHealth = await siteWorker.fetch(
  new Request("https://retrorun.win/api/health"),
  {
    ACCOUNT_API: {
      async fetch(request) {
        forwardedUrl = request.url;
        return new Response("account-ok");
      },
    },
  }
);
assert.equal(forwardedUrl, "https://retrorun.win/api/health");
assert.equal(await proxiedHealth.text(), "account-ok");

console.log("Retro Run Cloud Locker tests passed.");
