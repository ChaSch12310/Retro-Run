const SESSION_COOKIE = "retro_run_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 30;
const PASSWORD_ITERATIONS = 100000;
const MAX_BODY_BYTES = 1_500_000;
const MAX_AUTH_ATTEMPTS = 12;
const AUTH_WINDOW_MS = 15 * 60 * 1000;
const SAVE_SLOTS_PER_GAME = 5;
const MAX_LEADERBOARD_SUBMISSIONS_PER_DAY = 200;
const MAX_FANS = 3000;

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
  const difficulty = boundedNumber(metrics.difficulty, 1, 1, 2);
  const efficiency = Math.min(1, Math.max(0, 1 - (tries - 1) / 10));
  const difficultyBonus = Math.min(1, Math.max(0, (difficulty - 1) / 0.55));
  const gameScore = Math.min(1000000, Math.max(0, Math.round(
    (metrics.result === "W" ? 580000 : 320000)
      + efficiency * 300000
      + difficultyBonus * 120000
  )));

  const averageRating = (
    boundedNumber(metrics.speed, 50, 1, 100)
      + boundedNumber(metrics.power, 50, 1, 100)
      + boundedNumber(metrics.cut, 50, 1, 100)
  ) / 300;
  const playerScore = Math.min(1000000, Math.max(0, Math.round(
    averageRating * 650000
      + boundedNumber(metrics.playerMorale, 50, 0, 100) / 100 * 250000
      + boundedNumber(metrics.upgrades, 0, 0, 20) / 20 * 100000
  )));

  const wins = Math.round(boundedNumber(metrics.wins, 0, 0, 9999));
  const losses = Math.round(boundedNumber(metrics.losses, 0, 0, 9999));
  const gamesPlayed = Math.max(1, wins + losses);
  const organizationRating = (
    boundedNumber(metrics.stadiumQuality, 50, 0, 100)
      + boundedNumber(metrics.trainingQuality, 50, 0, 100)
      + boundedNumber(metrics.coachRating, 50, 0, 100)
  ) / 300;
  const franchiseScore = Math.min(1000000, Math.max(0, Math.round(
    boundedNumber(metrics.fans, 0, 0, MAX_FANS) / MAX_FANS * 300000
      + boundedNumber(metrics.teamMorale, 50, 0, 100) / 100 * 200000
      + organizationRating * 250000
      + Math.min(1, Math.max(0, wins / gamesPlayed)) * 250000
  )));

  return { gameScore, playerScore, franchiseScore };
}

function centralTimeParts(timestamp) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(timestamp));
  return Object.fromEntries(parts
    .filter((part) => part.type !== "literal")
    .map((part) => [part.type, Number(part.value)]));
}

function centralOffsetMs(timestamp) {
  const parts = centralTimeParts(timestamp);
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second)
    - Math.floor(timestamp / 1000) * 1000;
}

function centralMidnightUtc(year, month, day) {
  const wallClock = Date.UTC(year, month - 1, day, 0, 0, 0);
  let timestamp = wallClock;
  for (let index = 0; index < 3; index += 1) {
    timestamp = wallClock - centralOffsetMs(timestamp);
  }
  return timestamp;
}

export function nextCentralMidnight(timestamp = Date.now()) {
  const parts = centralTimeParts(timestamp);
  const nextDay = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + 1));
  return centralMidnightUtc(
    nextDay.getUTCFullYear(),
    nextDay.getUTCMonth() + 1,
    nextDay.getUTCDate()
  );
}

export function normalizeLeaderboardSubmission(body, now = Date.now()) {
  const clientEntryId = String(body?.clientEntryId || "");
  const gameId = String(body?.gameId || "");
  const playedAt = Number(body?.playedAt);
  if (!/^[a-zA-Z0-9-]{8,80}$/.test(clientEntryId)) {
    throw new Error("Invalid leaderboard entry ID.");
  }
  if (!LEADERBOARD_GAMES[gameId]) throw new Error("Unknown Retro Run game.");
  if (!Number.isSafeInteger(playedAt) || playedAt < now - 90 * 24 * 60 * 60 * 1000 || playedAt > now + 5 * 60 * 1000) {
    throw new Error("Invalid game date.");
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
  constructor(ctx) {
    this.ctx = ctx;
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
    `);
  }

  one(query, ...bindings) {
    return this.sql.exec(query, ...bindings).toArray()[0] || null;
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
    const currentAlarm = await this.ctx.storage.getAlarm();
    if (currentAlarm === null || timestamp < currentAlarm) {
      await this.ctx.storage.setAlarm(timestamp);
    }
  }

  publishDueLeaderboardEntries(now = Date.now()) {
    const due = this.one(
      "SELECT COUNT(*) AS count FROM leaderboard_entries WHERE published_at IS NULL AND publish_at <= ?",
      now
    );
    if (Number(due?.count) <= 0) return false;
    this.sql.exec(
      "UPDATE leaderboard_entries SET published_at = ? WHERE published_at IS NULL AND publish_at <= ?",
      now,
      now
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
    if (!user) return errorResponse("Sign in to view the leaderboard.", 401);
    const now = Date.now();
    this.publishDueLeaderboardEntries(now);
    const rows = this.sql.exec(
      `SELECT username, played_at, game_name, season, week,
              game_score, player_score, franchise_score
       FROM leaderboard_entries
       WHERE published_at IS NOT NULL
       ORDER BY (game_score + player_score + franchise_score) DESC, played_at ASC
       LIMIT 100`
    ).toArray();
    const pending = this.one(
      "SELECT COUNT(*) AS count FROM leaderboard_entries WHERE user_id = ? AND published_at IS NULL",
      user.id
    );
    const lastUpdated = this.one(
      "SELECT meta_value FROM leaderboard_meta WHERE meta_key = 'last_updated_at'"
    );
    return jsonResponse({
      entries: rows.map((row) => ({
        username: row.username,
        playedAt: Number(row.played_at),
        gameName: row.game_name,
        season: Number(row.season),
        week: Number(row.week),
        gameScore: Number(row.game_score),
        playerScore: Number(row.player_score),
        franchiseScore: Number(row.franchise_score),
      })),
      pendingCount: Number(pending?.count) || 0,
      nextUpdateAt: nextCentralMidnight(now),
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
    const publishAt = nextCentralMidnight(now);
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
      submission.scores.gameScore,
      submission.scores.playerScore,
      submission.scores.franchiseScore
    );
    await this.scheduleLeaderboardAlarm(publishAt);
    return jsonResponse({
      accepted: true,
      scores: submission.scores,
      publishAt,
    }, 202);
  }

  async alarm() {
    const now = Date.now();
    this.publishDueLeaderboardEntries(now);
    await this.ctx.storage.setAlarm(nextCentralMidnight(now));
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
        return this.handleSignup(request);
      }
      if (url.pathname === "/api/auth/signin" && request.method === "POST") {
        return this.handleSignin(request);
      }
      if (url.pathname === "/api/auth/signout" && request.method === "POST") {
        return this.handleSignout(request);
      }
      if (url.pathname === "/api/saves" && request.method === "GET") {
        return this.handleSaveRead(request);
      }
      if (url.pathname === "/api/saves" && request.method === "PUT") {
        return this.handleSaveWrite(request);
      }
      if (url.pathname === "/api/leaderboard" && request.method === "GET") {
        return this.handleLeaderboardRead(request);
      }
      if (url.pathname === "/api/leaderboard" && request.method === "POST") {
        return this.handleLeaderboardWrite(request);
      }
      return errorResponse("API route not found.", 404);
    } catch (error) {
      console.error("Retro Run account API error", error);
      const knownMessage = error instanceof Error && (
        error.message === "Request is too large." || error.message === "Invalid JSON request."
      ) ? error.message : "Account service is temporarily unavailable.";
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
