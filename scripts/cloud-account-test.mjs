import assert from "node:assert/strict";
import worker, {
  calculateLeaderboardScores,
  LEADERBOARD_GAMES,
  SAVE_KEYS,
  hashPassword,
  mergeSaveBundles,
  nextCentralMidnight,
  normalizeLeaderboardSubmission,
  normalizeSaveBundle,
  normalizeUsername,
  verifyPassword,
} from "../worker.js";
import siteWorker from "../site-worker.js";

assert.equal(normalizeUsername("  Player_One  "), "player_one");
assert.equal(SAVE_KEYS.length, 10);
assert.equal(Object.keys(LEADERBOARD_GAMES).length, 10);

const leaderboardMetrics = {
  result: "W",
  tries: 2,
  difficulty: 1.25,
  speed: 72,
  power: 68,
  cut: 74,
  playerMorale: 80,
  upgrades: 5,
  fans: 2100,
  teamMorale: 75,
  stadiumQuality: 65,
  trainingQuality: 60,
  coachRating: 70,
  wins: 7,
  losses: 2,
};
const leaderboardScores = calculateLeaderboardScores(leaderboardMetrics);
Object.values(leaderboardScores).forEach((score) => {
  assert.equal(Number.isInteger(score), true);
  assert.ok(score >= 0 && score <= 1_000_000);
});
assert.ok(leaderboardScores.gameScore > calculateLeaderboardScores({ ...leaderboardMetrics, tries: 9 }).gameScore);
assert.equal(
  new Date(nextCentralMidnight(Date.parse("2026-09-07T23:30:00-05:00"))).toISOString(),
  "2026-09-08T05:00:00.000Z"
);
assert.equal(
  new Date(nextCentralMidnight(Date.parse("2026-01-07T23:30:00-06:00"))).toISOString(),
  "2026-01-08T06:00:00.000Z"
);
const normalizedLeaderboardEntry = normalizeLeaderboardSubmission({
  clientEntryId: "entry-test-1234",
  playedAt: Date.parse("2026-09-08T12:00:00Z"),
  gameId: "soccer",
  season: 3,
  week: 7,
  metrics: leaderboardMetrics,
}, Date.parse("2026-09-08T12:01:00Z"));
assert.equal(normalizedLeaderboardEntry.gameName, "Goal Rush");
assert.deepEqual(normalizedLeaderboardEntry.scores, leaderboardScores);
assert.throws(() => normalizeLeaderboardSubmission({
  clientEntryId: "entry-test-1234",
  playedAt: Date.parse("2026-09-08T12:00:00Z"),
  gameId: "unknown",
  metrics: leaderboardMetrics,
}, Date.parse("2026-09-08T12:01:00Z")), /Unknown Retro Run game/);

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
  usernameOnlyAccounts: true,
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
