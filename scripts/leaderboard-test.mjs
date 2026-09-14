import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { AccountStore, LEADERBOARD_GAMES } from "../worker.js";

// Run the real account handler and its ranking query against an in-memory SQLite database.
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
const store = new AccountStore({ storage: { sql } });
const now = Date.now();
const addEntry = ({
  id, user = "alice", game = "gridiron", scores = [500_000, 500_000, 500_000],
  playedAt = now - 1000, published = true,
}) => {
  sql.exec(
    `INSERT INTO leaderboard_entries (
      id, user_id, username, client_entry_id, played_at, submitted_at, publish_at,
      published_at, game_id, game_name, season, week, game_score, player_score, franchise_score
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, ?, ?, ?)`,
    id, user, user, id, playedAt, playedAt, published ? now - 500 : now + 60_000,
    published ? now - 500 : null, game, LEADERBOARD_GAMES[game], ...scores,
  );
};
const readBoard = async () => {
  const response = await store.fetch(new Request("https://example.test/api/leaderboard"));
  assert.equal(response.status, 200);
  return response.json();
};

try {
  assert.deepEqual((await readBoard()).entries, []);
  addEntry({ id: "alice-old", scores: [1_000_000, 100_000, 100_000] });
  addEntry({ id: "alice-best", scores: [600_000, 700_000, 800_000], playedAt: now - 2000 });
  addEntry({ id: "alice-tied-later", scores: [700_000, 600_000, 800_000] });
  addEntry({ id: "alice-soccer", game: "soccer" });
  addEntry({ id: "bob-football", user: "bob" });
  addEntry({ id: "alice-pending", scores: [1_000_000, 1_000_000, 1_000_000], published: false });
  addEntry({ id: "carol-pending", user: "carol", published: false });

  const initial = await readBoard();
  assert.equal(initial.entries.length, 3);
  assert.deepEqual(initial.entries[0], {
    username: "alice", playedAt: now - 2000, gameName: LEADERBOARD_GAMES.gridiron,
    season: 1, week: 1, tackleScore: 600_000, speedScore: 700_000, fanScore: 800_000,
  });
  assert.ok(initial.entries.some((entry) => entry.username === "alice" && entry.gameName === LEADERBOARD_GAMES.soccer));
  assert.ok(initial.entries.some((entry) => entry.username === "bob" && entry.gameName === LEADERBOARD_GAMES.gridiron));
  assert.equal(initial.pendingCount, 0);

  // Duplicate runs must be removed before the top-25 cutoff, not afterward.
  for (let index = 0; index < 30; index += 1) {
    addEntry({ id: `alice-repeat-${index}`, scores: [600_000, 600_000, 600_000] });
    addEntry({ id: `rival-${index}`, user: `rival-${index}`, scores: [400_000 - index, 400_000, 400_000] });
  }
  const ranked = (await readBoard()).entries;
  assert.equal(ranked.length, 25);
  assert.equal(new Set(ranked.map((entry) => `${entry.username}/${entry.gameName}`)).size, 25);
  assert.equal(ranked.at(-1).username, "rival-21");
  for (let index = 1; index < ranked.length; index += 1) {
    const total = (entry) => entry.tackleScore + entry.speedScore + entry.fanScore;
    assert.ok(total(ranked[index - 1]) >= total(ranked[index]));
  }

  // A queued improvement takes over only once the nightly publication runs.
  store.publishDueLeaderboardEntries(now + 60_001);
  const published = (await readBoard()).entries;
  assert.equal(published.length, 25);
  assert.equal(published.filter((entry) => entry.username === "alice" && entry.gameName === LEADERBOARD_GAMES.gridiron).length, 1);
  assert.deepEqual(
    [published[0].tackleScore, published[0].speedScore, published[0].fanScore],
    [1_000_000, 1_000_000, 1_000_000],
  );
  assert.ok(published.some((entry) => entry.username === "carol"));
  assert.equal(Number(sql.exec("SELECT COUNT(*) AS count FROM leaderboard_entries").toArray()[0].count), 67);
  console.log("Retro Run top-25 leaderboard ranking tests passed.");
} finally {
  database.close();
}
