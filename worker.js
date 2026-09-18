const SESSION_COOKIE = "retro_run_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 30;
const PASSWORD_ITERATIONS = 100000;
const MAX_BODY_BYTES = 1_500_000;
const MAX_AUTH_ATTEMPTS = 12;
const AUTH_WINDOW_MS = 15 * 60 * 1000;
const SAVE_SLOTS_PER_GAME = 5;
const MAX_LEADERBOARD_SUBMISSIONS_PER_DAY = 200;
const MAX_FANS = 3000;
const MAX_CHAT_MESSAGE_LENGTH = 180;
const MAX_CHAT_MESSAGES_PER_MINUTE = 6;
const MAX_CHAT_MESSAGES_PER_DAY = 100;
const MAX_REPORTS_PER_DAY = 10;
const MAX_FOLLOWS = 200;
const MAX_FOLLOW_CHANGES_PER_DAY = 100;
const MAX_FRIEND_CHAT_MEMBERS = 10;
const MAX_FRIEND_CONVERSATIONS = 100;
const CHAT_HISTORY_LIMIT = 50;
const CHAT_RETENTION_MS = 30 * 24 * 60 * 60 * 1000;
const PLAYER_REPORT_REASONS = new Set([
  "harassment",
  "inappropriate",
  "personal-info",
  "spam",
  "other",
]);
const ISSUE_REPORT_CATEGORIES = new Set([
  "bug",
  "gameplay",
  "display",
  "account",
  "other",
]);

export const LEADERBOARD_GAMES = {
  gridiron: "Gridiron Dash",
  soccer: "Goal Rush",
  basketball: "Hoop Hustle",
  hockey: "Rink Rush",
  waterPolo: "Splash Strike",
  surfing: "Wave Rider",
  skiing: "Slope Sprint",
  baseball: "Diamond Dash",
  lacrosse: "Crosse Clash",
  dodgeball: "Dodgeball Dash",
};
const LEADERBOARD_GAME_IDS = Object.freeze(Object.keys(LEADERBOARD_GAMES));
const LEADERBOARD_GAME_PLACEHOLDERS = LEADERBOARD_GAME_IDS.map(() => "?").join(", ");

export const SAVE_KEYS = [
  "gridiron-dash-franchise-slots",
  "pitch-dash-franchise-slots",
  "hoop-hustle-franchise-slots",
  "rink-rush-franchise-slots",
  "splash-strike-franchise-slots",
  "wave-rider-franchise-slots",
  "slope-sprint-franchise-slots",
  "diamond-dash-franchise-slots",
  "crosse-clash-franchise-slots",
  "dodgeball-dash-franchise-slots",
];

export function normalizeChatMessage(value) {
  const message = String(value || "")
    .replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2060-\u206f\ufeff]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!message) throw new RangeError("Write a message before sending.");
  if (message.length > MAX_CHAT_MESSAGE_LENGTH) {
    throw new RangeError(`Messages can be up to ${MAX_CHAT_MESSAGE_LENGTH} characters.`);
  }
  if (/(?:https?:\/\/|www\.|(?:^|\s)[a-z0-9-]+\.(?:com|net|org|gg|io|co)(?:[\s/:]|$))/i.test(message)) {
    throw new RangeError("Links are not allowed in the Locker Room.");
  }
  const possiblePhone = message.match(/\+?\d[\d\s().-]{5,}\d/);
  if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(message)
    || (possiblePhone && possiblePhone[0].replace(/\D/g, "").length >= 7)) {
    throw new RangeError("Do not share email addresses or phone numbers in the Locker Room.");
  }
  return message;
}

export function normalizeReportDetails(value, maximum = 800) {
  const details = String(value || "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2060-\u206f\ufeff]/g, "")
    .replace(/\r\n?/g, "\n")
    .trim();
  if (details.length > maximum) throw new RangeError(`Report details can be up to ${maximum} characters.`);
  return details;
}

function base64FromBytes(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function bytesFromBase64(value) {
  const binary = atob(value);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return base64FromBytes(new Uint8Array(digest));
}

export function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function usernameError(username) {
  if (!/^[a-z0-9_]{3,24}$/.test(username)) {
    return "Username must be 3-24 characters using letters, numbers, or underscores.";
  }
  return "";
}

function passcodeError(passcode) {
  if (typeof passcode !== "string" || passcode.length < 8 || passcode.length > 128) {
    return "Passcode must be 8-128 characters.";
  }
  return "";
}

export async function hashPassword(password, salt = null) {
  const passwordSalt = salt || crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: passwordSalt,
      iterations: PASSWORD_ITERATIONS,
    },
    key,
    256
  );
  return {
    salt: base64FromBytes(passwordSalt),
    hash: base64FromBytes(new Uint8Array(bits)),
  };
}

export async function verifyPassword(password, salt, expectedHash) {
  const result = await hashPassword(password, bytesFromBase64(salt));
  const actual = bytesFromBase64(result.hash);
  const expected = bytesFromBase64(expectedHash);
  if (actual.length !== expected.length) return false;
  let difference = 0;
  actual.forEach((byte, index) => { difference |= byte ^ expected[index]; });
  return difference === 0;
}

function normalizeTimestamp(value) {
  const timestamp = Number(value);
  return Number.isSafeInteger(timestamp) && timestamp >= 0 ? timestamp : 0;
}

function normalizeSlotRecord(record) {
  const data = record?.data && typeof record.data === "object" && !Array.isArray(record.data)
    ? record.data
    : null;
  return {
    data,
    updatedAt: normalizeTimestamp(record?.updatedAt),
  };
}

export function normalizeSaveBundle(bundle) {
  const games = {};
  SAVE_KEYS.forEach((key) => {
    const slots = Array.isArray(bundle?.games?.[key]) ? bundle.games[key] : [];
    games[key] = Array.from(
      { length: SAVE_SLOTS_PER_GAME },
      (_, index) => normalizeSlotRecord(slots[index])
    );
  });
  return { version: 1, games };
}

export function mergeSaveBundles(firstBundle, secondBundle) {
  const first = normalizeSaveBundle(firstBundle);
  const second = normalizeSaveBundle(secondBundle);
  const games = {};
  SAVE_KEYS.forEach((key) => {
    games[key] = first.games[key].map((firstSlot, index) => {
      const secondSlot = second.games[key][index];
      if (secondSlot.updatedAt > firstSlot.updatedAt) return secondSlot;
      if (firstSlot.updatedAt > secondSlot.updatedAt) return firstSlot;
      return secondSlot.data !== null ? secondSlot : firstSlot;
    });
  });
  return { version: 1, games };
}

function boundedNumber(value, fallback, minimum, maximum) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(maximum, Math.max(minimum, number)) : fallback;
}

export function calculateLeaderboardScores(metrics = {}) {
  const tries = Math.round(boundedNumber(metrics.tries, 1, 1, 99));
  const tackles = Math.min(10, Math.max(0, tries - 1));
  const tackleScore = Math.min(1000000, Math.max(0, Math.round(
    (1 - tackles / 10) * 1000000
  )));
  const speedScore = Math.min(1000000, Math.max(0, Math.round(
    boundedNumber(metrics.speed, 50, 0, 100) / 100 * 1000000
  )));
  const fanScore = Math.min(1000000, Math.max(0, Math.round(
    boundedNumber(metrics.fans, 0, 0, MAX_FANS) / MAX_FANS * 1000000
  )));

  return { tackleScore, speedScore, fanScore };
}

export function nextHourlyUpdate(timestamp = Date.now()) {
  return Math.floor(timestamp / (60 * 60 * 1000)) * 60 * 60 * 1000 + 60 * 60 * 1000;
}

export function normalizeLeaderboardSubmission(body, now = Date.now()) {
  const clientEntryId = String(body?.clientEntryId || "");
  const gameId = String(body?.gameId || "");
  const playedAt = Number(body?.playedAt);
  if (!/^[a-zA-Z0-9-]{8,80}$/.test(clientEntryId)) {
    throw new RangeError("Invalid leaderboard entry ID.");
  }
  if (!LEADERBOARD_GAMES[gameId]) throw new RangeError("Only standard arcade games can enter the leaderboard.");
  if (!Number.isSafeInteger(playedAt) || playedAt < now - 90 * 24 * 60 * 60 * 1000 || playedAt > now + 5 * 60 * 1000) {
    throw new RangeError("Invalid game date.");
  }
  const season = Math.round(boundedNumber(body?.season, 1, 1, 999));
  const week = Math.round(boundedNumber(body?.week, 1, 1, 12));
  const metrics = body?.metrics && typeof body.metrics === "object" ? body.metrics : {};
  return {
    clientEntryId,
    playedAt,
    gameId,
    gameName: LEADERBOARD_GAMES[gameId],
    season,
    week,
    metrics,
    scores: calculateLeaderboardScores(metrics),
  };
}

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function errorResponse(message, status = 400, headers = {}) {
  return jsonResponse({ error: message }, status, headers);
}

function cookieValue(request, name) {
  const cookies = request.headers.get("Cookie") || "";
  for (const cookie of cookies.split(";")) {
    const [key, ...parts] = cookie.trim().split("=");
    if (key === name) return decodeURIComponent(parts.join("="));
  }
  return "";
}

function sessionCookie(token) {
  return `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_LIFETIME_SECONDS}`;
}

function expiredSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

async function readJson(request) {
  const declaredSize = Number(request.headers.get("Content-Length") || 0);
  if (declaredSize > MAX_BODY_BYTES) throw new Error("Request is too large.");
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) throw new Error("Request is too large.");
  try {
    return JSON.parse(text || "{}");
  } catch {
    throw new Error("Invalid JSON request.");
  }
}

function sameOriginRequest(request) {
  const origin = request.headers.get("Origin");
  return !origin || origin === new URL(request.url).origin;
}

function randomToken() {
  return base64FromBytes(crypto.getRandomValues(new Uint8Array(32)))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

export class AccountStore {
  constructor(ctx, env = {}) {
    this.ctx = ctx;
    this.env = env;
    this.sql = ctx.storage.sql;
    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE COLLATE NOCASE,
        username TEXT NOT NULL UNIQUE COLLATE NOCASE,
        password_salt TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS sessions (
        token_hash TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        expires_at INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS sessions_user_id ON sessions(user_id);
      CREATE INDEX IF NOT EXISTS sessions_expires_at ON sessions(expires_at);
      CREATE TABLE IF NOT EXISTS saves (
        user_id TEXT PRIMARY KEY,
        payload TEXT NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS auth_limits (
        rate_key TEXT PRIMARY KEY,
        attempts INTEGER NOT NULL,
        reset_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS leaderboard_entries (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        username TEXT NOT NULL,
        client_entry_id TEXT NOT NULL,
        played_at INTEGER NOT NULL,
        submitted_at INTEGER NOT NULL,
        publish_at INTEGER NOT NULL,
        published_at INTEGER,
        game_id TEXT NOT NULL,
        game_name TEXT NOT NULL,
        season INTEGER NOT NULL,
        week INTEGER NOT NULL,
        game_score INTEGER NOT NULL,
        player_score INTEGER NOT NULL,
        franchise_score INTEGER NOT NULL,
        UNIQUE(user_id, client_entry_id)
      );
      CREATE INDEX IF NOT EXISTS leaderboard_publish_at ON leaderboard_entries(publish_at);
      CREATE INDEX IF NOT EXISTS leaderboard_scores ON leaderboard_entries(game_score, player_score, franchise_score);
      CREATE TABLE IF NOT EXISTS leaderboard_meta (
        meta_key TEXT PRIMARY KEY,
        meta_value TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS chat_messages (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        username TEXT NOT NULL,
        body TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS chat_messages_created_at ON chat_messages(created_at);
      CREATE INDEX IF NOT EXISTS chat_messages_user_created_at ON chat_messages(user_id, created_at);
      CREATE TABLE IF NOT EXISTS community_reports (
        id TEXT PRIMARY KEY,
        report_type TEXT NOT NULL,
        reporter_user_id TEXT NOT NULL,
        reporter_username TEXT NOT NULL,
        message_id TEXT,
        target_user_id TEXT,
        target_username TEXT,
        reason TEXT NOT NULL,
        details TEXT NOT NULL,
        context TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        email_status TEXT NOT NULL,
        email_error TEXT NOT NULL,
        UNIQUE(reporter_user_id, message_id)
      );
      CREATE INDEX IF NOT EXISTS community_reports_created_at ON community_reports(created_at);
      CREATE INDEX IF NOT EXISTS community_reports_target ON community_reports(target_user_id, created_at);
      CREATE TABLE IF NOT EXISTS follows (
        follower_user_id TEXT NOT NULL,
        followed_user_id TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        PRIMARY KEY (follower_user_id, followed_user_id)
      );
      CREATE INDEX IF NOT EXISTS follows_followed_user ON follows(followed_user_id, created_at);
      CREATE TABLE IF NOT EXISTS follow_actions (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS follow_actions_user_created_at ON follow_actions(user_id, created_at);
      CREATE TABLE IF NOT EXISTS friend_conversations (
        id TEXT PRIMARY KEY,
        conversation_type TEXT NOT NULL,
        title TEXT NOT NULL,
        direct_key TEXT UNIQUE,
        created_by TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS friend_conversation_members (
        conversation_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        joined_at INTEGER NOT NULL,
        PRIMARY KEY (conversation_id, user_id)
      );
      CREATE INDEX IF NOT EXISTS friend_conversation_members_user
        ON friend_conversation_members(user_id, joined_at);
      CREATE TABLE IF NOT EXISTS friend_messages (
        id TEXT PRIMARY KEY,
        conversation_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        username TEXT NOT NULL,
        body TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS friend_messages_conversation_created
        ON friend_messages(conversation_id, created_at);
      CREATE INDEX IF NOT EXISTS friend_messages_user_created
        ON friend_messages(user_id, created_at);
    `);
    this.removeUnsupportedLeaderboardEntries();
  }

  one(query, ...bindings) {
    return this.sql.exec(query, ...bindings).toArray()[0] || null;
  }

  removeUnsupportedLeaderboardEntries() {
    this.sql.exec(
      `DELETE FROM leaderboard_entries WHERE game_id NOT IN (${LEADERBOARD_GAME_PLACEHOLDERS})`,
      ...LEADERBOARD_GAME_IDS
    );
  }

  async rateKey(request, route) {
    const address = request.headers.get("CF-Connecting-IP") || "unknown";
    return sha256(`${route}:${address}`);
  }

  async consumeAuthAttempt(request, route) {
    const rateKey = await this.rateKey(request, route);
    const now = Date.now();
    const current = this.one(
      "SELECT attempts, reset_at FROM auth_limits WHERE rate_key = ?",
      rateKey
    );
    if (!current || current.reset_at <= now) {
      this.sql.exec(
        "INSERT OR REPLACE INTO auth_limits (rate_key, attempts, reset_at) VALUES (?, 1, ?)",
        rateKey,
        now + AUTH_WINDOW_MS
      );
      return { allowed: true, rateKey };
    }
    if (current.attempts >= MAX_AUTH_ATTEMPTS) {
      return {
        allowed: false,
        retryAfter: Math.max(1, Math.ceil((current.reset_at - now) / 1000)),
      };
    }
    this.sql.exec(
      "UPDATE auth_limits SET attempts = attempts + 1 WHERE rate_key = ?",
      rateKey
    );
    return { allowed: true, rateKey };
  }

  clearAuthAttempts(rateKey) {
    if (rateKey) this.sql.exec("DELETE FROM auth_limits WHERE rate_key = ?", rateKey);
  }

  async createSession(userId) {
    const token = randomToken();
    const tokenHash = await sha256(token);
    const now = Date.now();
    this.sql.exec(
      "INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
      tokenHash,
      userId,
      now,
      now + SESSION_LIFETIME_SECONDS * 1000
    );
    return token;
  }

  async currentUser(request) {
    const token = cookieValue(request, SESSION_COOKIE);
    if (!token) return null;
    const tokenHash = await sha256(token);
    const now = Date.now();
    const user = this.one(
      `SELECT users.id, users.username, sessions.expires_at
       FROM sessions JOIN users ON users.id = sessions.user_id
       WHERE sessions.token_hash = ?`,
      tokenHash
    );
    if (!user || user.expires_at <= now) {
      this.sql.exec("DELETE FROM sessions WHERE token_hash = ?", tokenHash);
      return null;
    }
    return { id: user.id, username: user.username, tokenHash };
  }

  async handleSignup(request) {
    const rate = await this.consumeAuthAttempt(request, "signup");
    if (!rate.allowed) {
      return errorResponse("Too many attempts. Try again soon.", 429, {
        "Retry-After": String(rate.retryAfter),
      });
    }
    const body = await readJson(request);
    const username = normalizeUsername(body.username);
    const usernameMessage = usernameError(username);
    const passcodeMessage = passcodeError(body.passcode);
    if (usernameMessage || passcodeMessage) {
      return errorResponse(usernameMessage || passcodeMessage);
    }
    if (this.one("SELECT id FROM users WHERE username = ?", username)) {
      return errorResponse("That username is already taken.", 409);
    }
    const credentials = await hashPassword(body.passcode);
    const userId = crypto.randomUUID();
    const now = Date.now();
    const legacyEmailPlaceholder = `${username}@accounts.retrorun.invalid`;
    this.sql.exec(
      `INSERT INTO users (
         id, email, username, password_salt, password_hash, created_at
       ) VALUES (?, ?, ?, ?, ?, ?)`,
      userId,
      legacyEmailPlaceholder,
      username,
      credentials.salt,
      credentials.hash,
      now
    );
    const token = await this.createSession(userId);
    this.clearAuthAttempts(rate.rateKey);
    return jsonResponse(
      { authenticated: true, username },
      201,
      { "Set-Cookie": sessionCookie(token) }
    );
  }

  async handleSignin(request) {
    const rate = await this.consumeAuthAttempt(request, "signin");
    if (!rate.allowed) {
      return errorResponse("Too many attempts. Try again soon.", 429, {
        "Retry-After": String(rate.retryAfter),
      });
    }
    const body = await readJson(request);
    const username = normalizeUsername(body.username);
    const user = this.one(
      `SELECT id, username, password_salt, password_hash FROM users
       WHERE username = ?`,
      username
    );
    const valid = user && typeof body.passcode === "string"
      ? await verifyPassword(body.passcode, user.password_salt, user.password_hash)
      : false;
    if (!valid) return errorResponse("Incorrect username or passcode.", 401);
    const token = await this.createSession(user.id);
    this.clearAuthAttempts(rate.rateKey);
    return jsonResponse(
      { authenticated: true, username: user.username },
      200,
      { "Set-Cookie": sessionCookie(token) }
    );
  }

  async handleSignout(request) {
    const user = await this.currentUser(request);
    if (user) this.sql.exec("DELETE FROM sessions WHERE token_hash = ?", user.tokenHash);
    return jsonResponse(
      { authenticated: false },
      200,
      { "Set-Cookie": expiredSessionCookie() }
    );
  }

  async handleSaveRead(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to use cloud saves.", 401);
    const saved = this.one("SELECT payload, updated_at FROM saves WHERE user_id = ?", user.id);
    const saves = saved ? normalizeSaveBundle(JSON.parse(saved.payload)) : normalizeSaveBundle(null);
    return jsonResponse({ saves, updatedAt: saved?.updated_at || 0 });
  }

  async handleSaveWrite(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to use cloud saves.", 401);
    const body = await readJson(request);
    const incoming = normalizeSaveBundle(body.saves);
    const saved = this.one("SELECT payload FROM saves WHERE user_id = ?", user.id);
    const merged = mergeSaveBundles(saved ? JSON.parse(saved.payload) : null, incoming);
    const updatedAt = Date.now();
    this.sql.exec(
      `INSERT INTO saves (user_id, payload, updated_at) VALUES (?, ?, ?)
       ON CONFLICT(user_id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at`,
      user.id,
      JSON.stringify(merged),
      updatedAt
    );
    return jsonResponse({ saves: merged, updatedAt });
  }

  async scheduleLeaderboardAlarm(timestamp) {
    if (!this.ctx.storage.getAlarm || !this.ctx.storage.setAlarm) return;
    const currentAlarm = await this.ctx.storage.getAlarm();
    if (currentAlarm === null || timestamp < currentAlarm) {
      await this.ctx.storage.setAlarm(timestamp);
    }
  }

  publishDueLeaderboardEntries(now = Date.now()) {
    this.removeUnsupportedLeaderboardEntries();
    const due = this.one(
      `SELECT COUNT(*) AS count FROM leaderboard_entries
       WHERE published_at IS NULL AND publish_at <= ?
       AND game_id IN (${LEADERBOARD_GAME_PLACEHOLDERS})`,
      now,
      ...LEADERBOARD_GAME_IDS
    );
    if (Number(due?.count) <= 0) return false;
    this.sql.exec(
      `UPDATE leaderboard_entries SET published_at = ?
       WHERE published_at IS NULL AND publish_at <= ?
       AND game_id IN (${LEADERBOARD_GAME_PLACEHOLDERS})`,
      now,
      now,
      ...LEADERBOARD_GAME_IDS
    );
    this.sql.exec(
      `INSERT INTO leaderboard_meta (meta_key, meta_value) VALUES ('last_updated_at', ?)
       ON CONFLICT(meta_key) DO UPDATE SET meta_value = excluded.meta_value`,
      String(now)
    );
    return true;
  }

  async handleLeaderboardRead(request) {
    const user = await this.currentUser(request);
    const now = Date.now();
    const nextUpdateAt = nextHourlyUpdate(now);
    this.sql.exec(
      `UPDATE leaderboard_entries SET publish_at = ?
       WHERE published_at IS NULL AND publish_at > ?`,
      nextUpdateAt,
      nextUpdateAt
    );
    this.publishDueLeaderboardEntries(now);
    const rows = this.sql.exec(
      `WITH personal_bests AS (
         SELECT *, ROW_NUMBER() OVER (
           PARTITION BY user_id, game_id
           ORDER BY (game_score + player_score + franchise_score) DESC, played_at ASC, id ASC
         ) AS personal_rank
         FROM leaderboard_entries
         WHERE published_at IS NOT NULL
         AND game_id IN (${LEADERBOARD_GAME_PLACEHOLDERS})
       )
       SELECT username, played_at, game_id, season, week,
              game_score, player_score, franchise_score
       FROM personal_bests
       WHERE personal_rank = 1
       ORDER BY (game_score + player_score + franchise_score) DESC, played_at ASC, id ASC
       LIMIT 25`,
      ...LEADERBOARD_GAME_IDS
    ).toArray();
    const pending = user
      ? this.one(
        `SELECT COUNT(*) AS count FROM leaderboard_entries
         WHERE user_id = ? AND published_at IS NULL
         AND game_id IN (${LEADERBOARD_GAME_PLACEHOLDERS})`,
        user.id,
        ...LEADERBOARD_GAME_IDS
      )
      : null;
    const lastUpdated = this.one(
      "SELECT meta_value FROM leaderboard_meta WHERE meta_key = 'last_updated_at'"
    );
    const pendingAny = this.one(
      `SELECT COUNT(*) AS count FROM leaderboard_entries
       WHERE published_at IS NULL AND game_id IN (${LEADERBOARD_GAME_PLACEHOLDERS})`,
      ...LEADERBOARD_GAME_IDS
    );
    if (Number(pendingAny?.count) > 0) await this.scheduleLeaderboardAlarm(nextUpdateAt);
    return jsonResponse({
      entries: rows.map((row) => ({
        username: row.username,
        playedAt: Number(row.played_at),
        gameName: LEADERBOARD_GAMES[row.game_id],
        season: Number(row.season),
        week: Number(row.week),
        tackleScore: Number(row.game_score),
        speedScore: Number(row.player_score),
        fanScore: Number(row.franchise_score),
      })),
      pendingCount: Number(pending?.count) || 0,
      nextUpdateAt,
      lastUpdatedAt: Number(lastUpdated?.meta_value) || 0,
    });
  }

  async handleLeaderboardWrite(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to enter the leaderboard.", 401);
    const now = Date.now();
    const recent = this.one(
      "SELECT COUNT(*) AS count FROM leaderboard_entries WHERE user_id = ? AND submitted_at >= ?",
      user.id,
      now - 24 * 60 * 60 * 1000
    );
    if (Number(recent?.count) >= MAX_LEADERBOARD_SUBMISSIONS_PER_DAY) {
      return errorResponse("Leaderboard entry limit reached. Try again tomorrow.", 429);
    }
    const submission = normalizeLeaderboardSubmission(await readJson(request), now);
    const publishAt = nextHourlyUpdate(now);
    this.sql.exec(
      `INSERT OR IGNORE INTO leaderboard_entries (
         id, user_id, username, client_entry_id, played_at, submitted_at, publish_at,
         game_id, game_name, season, week, game_score, player_score, franchise_score
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      crypto.randomUUID(),
      user.id,
      user.username,
      submission.clientEntryId,
      submission.playedAt,
      now,
      publishAt,
      submission.gameId,
      submission.gameName,
      submission.season,
      submission.week,
      submission.scores.tackleScore,
      submission.scores.speedScore,
      submission.scores.fanScore
    );
    await this.scheduleLeaderboardAlarm(publishAt);
    return jsonResponse({
      accepted: true,
      scores: submission.scores,
      publishAt,
    }, 202);
  }

  recentUserCount(table, userId, since) {
    const userColumn = table === "community_reports" ? "reporter_user_id" : "user_id";
    return Number(this.one(
      `SELECT COUNT(*) AS count FROM ${table} WHERE ${userColumn} = ? AND created_at >= ?`,
      userId,
      since
    )?.count) || 0;
  }

  recentMessageCount(userId, since) {
    return Number(this.one(
      `SELECT (
         (SELECT COUNT(*) FROM chat_messages WHERE user_id = ? AND created_at >= ?)
         + (SELECT COUNT(*) FROM friend_messages WHERE user_id = ? AND created_at >= ?)
       ) AS count`,
      userId,
      since,
      userId,
      since
    )?.count) || 0;
  }

  relationship(userId, targetUserId) {
    const following = Boolean(this.one(
      "SELECT 1 AS found FROM follows WHERE follower_user_id = ? AND followed_user_id = ?",
      userId,
      targetUserId
    ));
    const followsYou = Boolean(this.one(
      "SELECT 1 AS found FROM follows WHERE follower_user_id = ? AND followed_user_id = ?",
      targetUserId,
      userId
    ));
    return { following, followsYou, friend: following && followsYou };
  }

  consumeFollowChange(userId, now) {
    this.sql.exec("DELETE FROM follow_actions WHERE created_at < ?", now - 24 * 60 * 60 * 1000);
    const recent = this.one(
      "SELECT COUNT(*) AS count FROM follow_actions WHERE user_id = ? AND created_at >= ?",
      userId,
      now - 24 * 60 * 60 * 1000
    );
    if (Number(recent?.count) >= MAX_FOLLOW_CHANGES_PER_DAY) return false;
    this.sql.exec(
      "INSERT INTO follow_actions (id, user_id, created_at) VALUES (?, ?, ?)",
      crypto.randomUUID(),
      userId,
      now
    );
    return true;
  }

  async handleSocialRead(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to view friends and followers.", 401);
    const following = this.sql.exec(
      `SELECT users.username, follows.created_at,
              EXISTS(
                SELECT 1 FROM follows AS reverse_follow
                WHERE reverse_follow.follower_user_id = follows.followed_user_id
                AND reverse_follow.followed_user_id = follows.follower_user_id
              ) AS follows_you
       FROM follows JOIN users ON users.id = follows.followed_user_id
       WHERE follows.follower_user_id = ?
       ORDER BY users.username COLLATE NOCASE ASC
       LIMIT ?`,
      user.id,
      MAX_FOLLOWS
    ).toArray().map((entry) => ({
      username: entry.username,
      followedAt: Number(entry.created_at),
      followsYou: Boolean(entry.follows_you),
      friend: Boolean(entry.follows_you),
    }));
    const followers = this.sql.exec(
      `SELECT users.username, follows.created_at,
              EXISTS(
                SELECT 1 FROM follows AS reverse_follow
                WHERE reverse_follow.follower_user_id = follows.followed_user_id
                AND reverse_follow.followed_user_id = follows.follower_user_id
              ) AS following
       FROM follows JOIN users ON users.id = follows.follower_user_id
       WHERE follows.followed_user_id = ?
       ORDER BY users.username COLLATE NOCASE ASC
       LIMIT ?`,
      user.id,
      MAX_FOLLOWS
    ).toArray().map((entry) => ({
      username: entry.username,
      followedAt: Number(entry.created_at),
      following: Boolean(entry.following),
      friend: Boolean(entry.following),
    }));
    return jsonResponse({
      username: user.username,
      friends: following.filter((entry) => entry.friend),
      following,
      followers,
      maximumFollowing: MAX_FOLLOWS,
    });
  }

  async handleFollowWrite(request, shouldFollow) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to follow players.", 401);
    const body = await readJson(request);
    const username = normalizeUsername(body.username);
    const target = this.one("SELECT id, username FROM users WHERE username = ?", username);
    if (!target) return errorResponse("That player was not found.", 404);
    if (target.id === user.id) return errorResponse("You cannot follow yourself.");
    const current = this.relationship(user.id, target.id);
    if (current.following === shouldFollow) {
      return jsonResponse({ username: target.username, ...current });
    }
    if (shouldFollow) {
      const count = this.one(
        "SELECT COUNT(*) AS count FROM follows WHERE follower_user_id = ?",
        user.id
      );
      if (Number(count?.count) >= MAX_FOLLOWS) {
        return errorResponse(`You can follow up to ${MAX_FOLLOWS} players.`, 409);
      }
    }
    const now = Date.now();
    if (!this.consumeFollowChange(user.id, now)) {
      return errorResponse("Daily follow-change limit reached. Try again tomorrow.", 429);
    }
    if (shouldFollow) {
      this.sql.exec(
        "INSERT INTO follows (follower_user_id, followed_user_id, created_at) VALUES (?, ?, ?)",
        user.id,
        target.id,
        now
      );
    } else {
      this.sql.exec(
        "DELETE FROM follows WHERE follower_user_id = ? AND followed_user_id = ?",
        user.id,
        target.id
      );
    }
    return jsonResponse({
      username: target.username,
      ...this.relationship(user.id, target.id),
    }, shouldFollow ? 201 : 200);
  }

  async handleChatRead(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to open the Locker Room.", 401);
    const messages = this.sql.exec(
      `SELECT messages.id, messages.username, messages.body, messages.created_at,
              EXISTS(
                SELECT 1 FROM follows
                WHERE follower_user_id = ? AND followed_user_id = messages.user_id
              ) AS following,
              EXISTS(
                SELECT 1 FROM follows
                WHERE follower_user_id = messages.user_id AND followed_user_id = ?
              ) AS follows_you
       FROM chat_messages AS messages
       ORDER BY messages.created_at DESC, messages.id DESC
       LIMIT ?`,
      user.id,
      user.id,
      CHAT_HISTORY_LIMIT
    ).toArray().reverse();
    return jsonResponse({
      messages: messages.map((message) => ({
        id: message.id,
        username: message.username,
        body: message.body,
        createdAt: Number(message.created_at),
        mine: message.username === user.username,
        following: Boolean(message.following),
        followsYou: Boolean(message.follows_you),
        friend: Boolean(message.following) && Boolean(message.follows_you),
      })),
      username: user.username,
      maximumLength: MAX_CHAT_MESSAGE_LENGTH,
    });
  }

  async handleChatWrite(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to send Locker Room messages.", 401);
    const now = Date.now();
    if (this.recentMessageCount(user.id, now - 60_000) >= MAX_CHAT_MESSAGES_PER_MINUTE) {
      return errorResponse("You're sending messages too quickly. Wait a minute and try again.", 429);
    }
    if (this.recentMessageCount(user.id, now - 24 * 60 * 60 * 1000) >= MAX_CHAT_MESSAGES_PER_DAY) {
      return errorResponse("Daily Locker Room message limit reached. Try again tomorrow.", 429);
    }
    const body = await readJson(request);
    const message = normalizeChatMessage(body.message);
    const id = crypto.randomUUID();
    this.sql.exec(
      "INSERT INTO chat_messages (id, user_id, username, body, created_at) VALUES (?, ?, ?, ?, ?)",
      id,
      user.id,
      user.username,
      message,
      now
    );
    this.sql.exec(
      `DELETE FROM chat_messages
       WHERE created_at < ?
       AND id NOT IN (SELECT message_id FROM community_reports WHERE message_id IS NOT NULL)`,
      now - CHAT_RETENTION_MS
    );
    return jsonResponse({
      message: { id, username: user.username, body: message, createdAt: now, mine: true },
    }, 201);
  }

  friendConversation(userId, conversationId) {
    const conversation = this.one(
      `SELECT conversations.id, conversations.conversation_type, conversations.title,
              conversations.created_at
       FROM friend_conversations AS conversations
       JOIN friend_conversation_members AS membership
         ON membership.conversation_id = conversations.id
       WHERE conversations.id = ? AND membership.user_id = ?`,
      conversationId,
      userId
    );
    if (!conversation) return null;
    const members = this.sql.exec(
      `SELECT users.username
       FROM friend_conversation_members AS membership
       JOIN users ON users.id = membership.user_id
       WHERE membership.conversation_id = ?
       ORDER BY users.username COLLATE NOCASE ASC`,
      conversationId
    ).toArray().map((entry) => entry.username);
    return {
      id: conversation.id,
      type: conversation.conversation_type,
      title: conversation.title,
      members,
      createdAt: Number(conversation.created_at),
    };
  }

  async handleFriendConversationsRead(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to open friend messages.", 401);
    const conversations = this.sql.exec(
      `SELECT conversations.id
       FROM friend_conversations AS conversations
       JOIN friend_conversation_members AS membership
         ON membership.conversation_id = conversations.id
       WHERE membership.user_id = ?
       ORDER BY COALESCE(
         (SELECT MAX(created_at) FROM friend_messages WHERE conversation_id = conversations.id),
         conversations.created_at
       ) DESC
       LIMIT ?`,
      user.id,
      MAX_FRIEND_CONVERSATIONS
    ).toArray().map((entry) => this.friendConversation(user.id, entry.id));
    return jsonResponse({ conversations, maximumMembers: MAX_FRIEND_CHAT_MEMBERS });
  }

  async handleFriendConversationCreate(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to message friends.", 401);
    const body = await readJson(request);
    const usernames = [...new Set(
      (Array.isArray(body.usernames) ? body.usernames : [])
        .map(normalizeUsername)
        .filter(Boolean)
    )];
    if (usernames.length < 1) return errorResponse("Choose at least one friend.");
    if (usernames.length > MAX_FRIEND_CHAT_MEMBERS - 1) {
      return errorResponse(`Friend chats can include up to ${MAX_FRIEND_CHAT_MEMBERS} people.`, 409);
    }
    if (usernames.includes(user.username)) return errorResponse("You are already included in the chat.");
    const placeholders = usernames.map(() => "?").join(", ");
    const targets = this.sql.exec(
      `SELECT id, username FROM users WHERE username IN (${placeholders})`,
      ...usernames
    ).toArray();
    if (targets.length !== usernames.length) return errorResponse("One or more players were not found.", 404);
    const targetByUsername = new Map(targets.map((target) => [target.username, target]));
    const orderedTargets = usernames.map((username) => targetByUsername.get(username));
    if (orderedTargets.some((target) => !this.relationship(user.id, target.id).friend)) {
      return errorResponse("You can only start chats with mutual friends.", 403);
    }

    const directKey = orderedTargets.length === 1
      ? [user.id, orderedTargets[0].id].sort().join(":")
      : null;
    if (directKey) {
      const existing = this.one("SELECT id FROM friend_conversations WHERE direct_key = ?", directKey);
      if (existing) return jsonResponse({ conversation: this.friendConversation(user.id, existing.id) });
    }

    const now = Date.now();
    const conversationId = crypto.randomUUID();
    const title = orderedTargets.length === 1
      ? `@${orderedTargets[0].username}`
      : orderedTargets.map((target) => `@${target.username}`).join(", ").slice(0, 160);
    this.sql.exec(
      `INSERT INTO friend_conversations (
         id, conversation_type, title, direct_key, created_by, created_at
       ) VALUES (?, ?, ?, ?, ?, ?)`,
      conversationId,
      orderedTargets.length === 1 ? "direct" : "group",
      title,
      directKey,
      user.id,
      now
    );
    [user, ...orderedTargets].forEach((member) => {
      this.sql.exec(
        `INSERT INTO friend_conversation_members (conversation_id, user_id, joined_at)
         VALUES (?, ?, ?)`,
        conversationId,
        member.id,
        now
      );
    });
    return jsonResponse({ conversation: this.friendConversation(user.id, conversationId) }, 201);
  }

  async handleFriendMessagesRead(request, url) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to read friend messages.", 401);
    const conversationId = String(url.searchParams.get("conversationId") || "");
    const conversation = this.friendConversation(user.id, conversationId);
    if (!conversation) return errorResponse("That friend chat was not found.", 404);
    const messages = this.sql.exec(
      `SELECT id, username, body, created_at
       FROM friend_messages
       WHERE conversation_id = ?
       ORDER BY created_at DESC, id DESC
       LIMIT ?`,
      conversationId,
      CHAT_HISTORY_LIMIT
    ).toArray().reverse().map((message) => ({
      id: message.id,
      username: message.username,
      body: message.body,
      createdAt: Number(message.created_at),
      mine: message.username === user.username,
    }));
    return jsonResponse({ conversation, messages, maximumLength: MAX_CHAT_MESSAGE_LENGTH });
  }

  async handleFriendMessageWrite(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to message friends.", 401);
    const now = Date.now();
    if (this.recentMessageCount(user.id, now - 60_000) >= MAX_CHAT_MESSAGES_PER_MINUTE) {
      return errorResponse("You're sending messages too quickly. Wait a minute and try again.", 429);
    }
    if (this.recentMessageCount(user.id, now - 24 * 60 * 60 * 1000) >= MAX_CHAT_MESSAGES_PER_DAY) {
      return errorResponse("Daily Locker Room message limit reached. Try again tomorrow.", 429);
    }
    const body = await readJson(request);
    const conversationId = String(body.conversationId || "");
    if (!this.friendConversation(user.id, conversationId)) {
      return errorResponse("That friend chat was not found.", 404);
    }
    const message = normalizeChatMessage(body.message);
    const id = crypto.randomUUID();
    this.sql.exec(
      `INSERT INTO friend_messages (id, conversation_id, user_id, username, body, created_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      id,
      conversationId,
      user.id,
      user.username,
      message,
      now
    );
    this.sql.exec(
      `DELETE FROM friend_messages
       WHERE created_at < ?
       AND id NOT IN (SELECT message_id FROM community_reports WHERE message_id IS NOT NULL)`,
      now - CHAT_RETENTION_MS
    );
    return jsonResponse({
      message: { id, username: user.username, body: message, createdAt: now, mine: true },
    }, 201);
  }

  async sendReportEmail(binding, recipient, subject, text) {
    if (!binding?.send) return { sent: false, error: "Email binding is not configured." };
    try {
      await binding.send({
        to: recipient,
        from: { email: "noreply@retrorun.win", name: "Retro Run Reports" },
        subject,
        text,
      });
      return { sent: true, error: "" };
    } catch (error) {
      console.error("Retro Run report email failed", {
        recipient,
        code: error?.code || "unknown",
        message: error instanceof Error ? error.message : "Unknown email error",
      });
      return {
        sent: false,
        error: error instanceof Error ? error.message.slice(0, 300) : "Unknown email error",
      };
    }
  }

  async reserveReport(user, report) {
    const now = Date.now();
    if (this.recentUserCount("community_reports", user.id, now - 24 * 60 * 60 * 1000) >= MAX_REPORTS_PER_DAY) {
      return { response: errorResponse("Daily report limit reached. Try again tomorrow.", 429) };
    }
    const reportId = crypto.randomUUID();
    this.sql.exec(
      `INSERT INTO community_reports (
         id, report_type, reporter_user_id, reporter_username, message_id,
         target_user_id, target_username, reason, details, context, created_at,
         email_status, email_error
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', '')`,
      reportId,
      report.type,
      user.id,
      user.username,
      report.messageId || null,
      report.targetUserId || null,
      report.targetUsername || null,
      report.reason,
      report.details,
      JSON.stringify(report.context || {}),
      now
    );
    return { reportId, now };
  }

  finishReportEmail(reportId, delivery) {
    this.sql.exec(
      "UPDATE community_reports SET email_status = ?, email_error = ? WHERE id = ?",
      delivery.sent ? "sent" : "stored",
      delivery.error,
      reportId
    );
  }

  async handlePlayerReport(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to report a player.", 401);
    const body = await readJson(request);
    const messageId = String(body.messageId || "");
    if (!/^[a-f0-9-]{20,50}$/i.test(messageId)) return errorResponse("Choose a valid message to report.");
    const reason = String(body.reason || "");
    if (!PLAYER_REPORT_REASONS.has(reason)) return errorResponse("Choose a report reason.");
    const details = normalizeReportDetails(body.details, 500);
    let target = this.one(
      "SELECT id, user_id, username, body, created_at FROM chat_messages WHERE id = ?",
      messageId
    );
    let messageLocation = "Public Locker Room";
    if (!target) {
      target = this.one(
        `SELECT messages.id, messages.user_id, messages.username, messages.body,
                messages.created_at, messages.conversation_id
         FROM friend_messages AS messages
         JOIN friend_conversation_members AS membership
           ON membership.conversation_id = messages.conversation_id
         WHERE messages.id = ? AND membership.user_id = ?`,
        messageId,
        user.id
      );
      messageLocation = "Friend chat";
    }
    if (!target) return errorResponse("That message is no longer available.", 404);
    if (target.user_id === user.id) return errorResponse("You cannot report your own message.");
    if (this.one(
      "SELECT id FROM community_reports WHERE reporter_user_id = ? AND message_id = ?",
      user.id,
      messageId
    )) return errorResponse("You already reported this message.", 409);

    const reserved = await this.reserveReport(user, {
      type: "player",
      messageId,
      targetUserId: target.user_id,
      targetUsername: target.username,
      reason,
      details,
      context: {
        message: target.body,
        messageCreatedAt: Number(target.created_at),
        messageLocation,
        conversationId: target.conversation_id || null,
      },
    });
    if (reserved.response) return reserved.response;
    const emailText = [
      `Report ID: ${reserved.reportId}`,
      `Reported by: @${user.username}`,
      `Reported player: @${target.username}`,
      `Reason: ${reason}`,
      `Location: ${messageLocation}`,
      `Message date: ${new Date(Number(target.created_at)).toISOString()}`,
      `Message: ${target.body}`,
      `Additional details: ${details || "None"}`,
    ].join("\n");
    const delivery = await this.sendReportEmail(
      this.env.PLAYER_REPORT_EMAIL,
      "reports@retrorun.win",
      `Retro Run player report: @${target.username}`,
      emailText
    );
    this.finishReportEmail(reserved.reportId, delivery);
    return jsonResponse({ accepted: true, reportId: reserved.reportId, emailSent: delivery.sent }, 201);
  }

  async handleIssueReport(request) {
    const user = await this.currentUser(request);
    if (!user) return errorResponse("Sign in to report a game issue.", 401);
    const body = await readJson(request);
    const category = String(body.category || "");
    if (!ISSUE_REPORT_CATEGORIES.has(category)) return errorResponse("Choose an issue category.");
    const details = normalizeReportDetails(body.details, 1000);
    if (details.length < 10) return errorResponse("Describe the issue using at least 10 characters.");
    const gameId = String(body.gameId || "arcade");
    if (gameId !== "arcade" && !LEADERBOARD_GAMES[gameId]) return errorResponse("Choose a valid game.");
    const context = {
      gameId,
      gameName: gameId === "arcade" ? "Retro Run Arcade" : LEADERBOARD_GAMES[gameId],
      device: String(body.device || "unknown").slice(0, 40),
      viewport: String(body.viewport || "unknown").slice(0, 40),
    };
    const reserved = await this.reserveReport(user, {
      type: "issue",
      reason: category,
      details,
      context,
    });
    if (reserved.response) return reserved.response;
    const emailText = [
      `Report ID: ${reserved.reportId}`,
      `Reported by: @${user.username}`,
      `Category: ${category}`,
      `Game: ${context.gameName} (${context.gameId})`,
      `Device layout: ${context.device}`,
      `Viewport: ${context.viewport}`,
      "",
      details,
    ].join("\n");
    const delivery = await this.sendReportEmail(
      this.env.ISSUE_REPORT_EMAIL,
      "updates@retrorun.win",
      `Retro Run issue: ${context.gameName} - ${category}`,
      emailText
    );
    this.finishReportEmail(reserved.reportId, delivery);
    return jsonResponse({ accepted: true, reportId: reserved.reportId, emailSent: delivery.sent }, 201);
  }

  async alarm() {
    const now = Date.now();
    this.publishDueLeaderboardEntries(now);
    await this.ctx.storage.setAlarm(nextHourlyUpdate(now));
  }

  async fetch(request) {
    const url = new URL(request.url);
    if (["POST", "PUT", "DELETE"].includes(request.method) && !sameOriginRequest(request)) {
      return errorResponse("Cross-origin request blocked.", 403);
    }
    try {
      if (url.pathname === "/api/auth/session" && request.method === "GET") {
        const user = await this.currentUser(request);
        return jsonResponse(user
          ? { authenticated: true, username: user.username }
          : { authenticated: false });
      }
      if (url.pathname === "/api/auth/signup" && request.method === "POST") {
        return await this.handleSignup(request);
      }
      if (url.pathname === "/api/auth/signin" && request.method === "POST") {
        return await this.handleSignin(request);
      }
      if (url.pathname === "/api/auth/signout" && request.method === "POST") {
        return await this.handleSignout(request);
      }
      if (url.pathname === "/api/saves" && request.method === "GET") {
        return await this.handleSaveRead(request);
      }
      if (url.pathname === "/api/saves" && request.method === "PUT") {
        return await this.handleSaveWrite(request);
      }
      if (url.pathname === "/api/leaderboard" && request.method === "GET") {
        return await this.handleLeaderboardRead(request);
      }
      if (url.pathname === "/api/leaderboard" && request.method === "POST") {
        return await this.handleLeaderboardWrite(request);
      }
      if (url.pathname === "/api/chat" && request.method === "GET") {
        return await this.handleChatRead(request);
      }
      if (url.pathname === "/api/chat" && request.method === "POST") {
        return await this.handleChatWrite(request);
      }
      if (url.pathname === "/api/social" && request.method === "GET") {
        return await this.handleSocialRead(request);
      }
      if (url.pathname === "/api/social/follow" && request.method === "POST") {
        return await this.handleFollowWrite(request, true);
      }
      if (url.pathname === "/api/social/unfollow" && request.method === "POST") {
        return await this.handleFollowWrite(request, false);
      }
      if (url.pathname === "/api/friend-chats" && request.method === "GET") {
        return await this.handleFriendConversationsRead(request);
      }
      if (url.pathname === "/api/friend-chats" && request.method === "POST") {
        return await this.handleFriendConversationCreate(request);
      }
      if (url.pathname === "/api/friend-chats/messages" && request.method === "GET") {
        return await this.handleFriendMessagesRead(request, url);
      }
      if (url.pathname === "/api/friend-chats/messages" && request.method === "POST") {
        return await this.handleFriendMessageWrite(request);
      }
      if (url.pathname === "/api/reports/player" && request.method === "POST") {
        return await this.handlePlayerReport(request);
      }
      if (url.pathname === "/api/reports/issue" && request.method === "POST") {
        return await this.handleIssueReport(request);
      }
      return errorResponse("API route not found.", 404);
    } catch (error) {
      const knownMessage = error instanceof RangeError || (error instanceof Error && (
        error.message === "Request is too large." || error.message === "Invalid JSON request."
      )) ? error.message : "Account service is temporarily unavailable.";
      if (knownMessage.startsWith("Account service")) {
        console.error("Retro Run account API error", error);
      }
      return errorResponse(knownMessage, knownMessage.startsWith("Account service") ? 500 : 400);
    }
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return jsonResponse({
        ok: true,
        service: "retro-run-cloud-saves",
        usernameOnlyAccounts: true,
      });
    }
    if (url.pathname.startsWith("/api/")) {
      if (!env.ACCOUNT_STORE) return errorResponse("Account service is not configured.", 503);
      const accountStoreId = env.ACCOUNT_STORE.idFromName("retro-run-accounts-v1");
      return env.ACCOUNT_STORE.get(accountStoreId).fetch(request);
    }
    return errorResponse("API route not found.", 404);
  },
};
