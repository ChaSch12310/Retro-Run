const SESSION_COOKIE = "retro_run_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 30;
const PASSWORD_ITERATIONS = 120000;
const MAX_BODY_BYTES = 1_500_000;
const MAX_AUTH_ATTEMPTS = 12;
const AUTH_WINDOW_MS = 15 * 60 * 1000;
const SAVE_SLOTS_PER_GAME = 5;
const EMAIL_CONFIRMATION_LIFETIME_MS = 24 * 60 * 60 * 1000;
const DEFAULT_EMAIL_FROM = "retrorun@schwartzdev.com";

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

export function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function emailError(email) {
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Enter a valid email address.";
  }
  return "";
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function duplicateEmailsAllowed(value) {
  return String(value || "").toLowerCase() === "true";
}

export function confirmationEmail({ email, username, confirmationUrl, from = DEFAULT_EMAIL_FROM }) {
  const safeUsername = escapeHtml(username);
  const safeConfirmationUrl = escapeHtml(confirmationUrl);
  return {
    to: email,
    from: { email: from, name: "Retro Run" },
    subject: "Confirm your Retro Run account",
    text: [
      `Hi ${username},`,
      "",
      "Confirm your Retro Run account by opening this link:",
      confirmationUrl,
      "",
      "This link expires in 24 hours. If you did not create this account, you can ignore this email.",
    ].join("\n"),
    html: `
      <div style="background:#0c1d2d;color:#fff7d6;font-family:Arial,sans-serif;padding:24px">
        <div style="max-width:520px;margin:auto;border:4px solid #f2c94c;background:#173652;padding:24px">
          <p style="color:#f2c94c;font-weight:800;letter-spacing:1px;margin:0 0 8px">RETRO RUN</p>
          <h1 style="font-size:24px;margin:0 0 16px">Confirm your account</h1>
          <p>Hi ${safeUsername},</p>
          <p>Confirm your email to unlock Cloud Locker saves on all your devices.</p>
          <p style="margin:24px 0">
            <a href="${safeConfirmationUrl}" style="display:inline-block;background:#f2c94c;color:#14253a;font-weight:800;padding:12px 18px;text-decoration:none">CONFIRM EMAIL</a>
          </p>
          <p style="font-size:13px;color:#dce4d2">This single-use link expires in 24 hours. If you did not create this account, you can ignore this email.</p>
        </div>
      </div>`,
  };
}

export class AccountStore {
  constructor(ctx, env) {
    this.sql = ctx.storage.sql;
    this.env = env;
    this.allowDuplicateEmails = duplicateEmailsAllowed(env.ALLOW_DUPLICATE_EMAILS);
    const emailConstraint = this.allowDuplicateEmails ? "" : "UNIQUE";
    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL ${emailConstraint} COLLATE NOCASE,
        username TEXT NOT NULL UNIQUE COLLATE NOCASE,
        password_salt TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        verified_at INTEGER,
        verification_token_hash TEXT,
        verification_expires_at INTEGER
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
    `);
    const userColumns = new Set(
      this.sql.exec("PRAGMA table_info(users)").toArray().map((column) => column.name)
    );
    if (!userColumns.has("verified_at")) {
      this.sql.exec("ALTER TABLE users ADD COLUMN verified_at INTEGER");
      this.sql.exec("UPDATE users SET verified_at = created_at WHERE verified_at IS NULL");
    }
    if (!userColumns.has("verification_token_hash")) {
      this.sql.exec("ALTER TABLE users ADD COLUMN verification_token_hash TEXT");
    }
    if (!userColumns.has("verification_expires_at")) {
      this.sql.exec("ALTER TABLE users ADD COLUMN verification_expires_at INTEGER");
    }
    this.sql.exec("CREATE INDEX IF NOT EXISTS users_email ON users(email)");
    this.sql.exec(
      "CREATE INDEX IF NOT EXISTS users_verification_token ON users(verification_token_hash)"
    );
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
      `SELECT users.id, users.email, users.username, sessions.expires_at
       FROM sessions JOIN users ON users.id = sessions.user_id
       WHERE sessions.token_hash = ?`,
      tokenHash
    );
    if (!user || user.expires_at <= now) {
      this.sql.exec("DELETE FROM sessions WHERE token_hash = ?", tokenHash);
      return null;
    }
    return { id: user.id, email: user.email, username: user.username, tokenHash };
  }

  async sendConfirmationEmail(request, email, username, token) {
    if (!this.env.EMAIL || typeof this.env.EMAIL.send !== "function") {
      throw new Error("Email confirmation is not configured.");
    }
    const confirmationUrl = new URL("/api/auth/confirm", request.url);
    confirmationUrl.searchParams.set("token", token);
    await this.env.EMAIL.send(confirmationEmail({
      email,
      username,
      confirmationUrl: confirmationUrl.toString(),
      from: this.env.EMAIL_FROM || DEFAULT_EMAIL_FROM,
    }));
  }

  async handleSignup(request) {
    const rate = await this.consumeAuthAttempt(request, "signup");
    if (!rate.allowed) {
      return errorResponse("Too many attempts. Try again soon.", 429, {
        "Retry-After": String(rate.retryAfter),
      });
    }
    const body = await readJson(request);
    const email = normalizeEmail(body.email);
    const username = normalizeUsername(body.username);
    const emailMessage = emailError(email);
    const usernameMessage = usernameError(username);
    const passcodeMessage = passcodeError(body.passcode);
    if (emailMessage || usernameMessage || passcodeMessage) {
      return errorResponse(emailMessage || usernameMessage || passcodeMessage);
    }
    if (!this.allowDuplicateEmails && this.one("SELECT id FROM users WHERE email = ?", email)) {
      return errorResponse("That email already has an account.", 409);
    }
    if (this.one("SELECT id FROM users WHERE username = ?", username)) {
      return errorResponse("That username is already taken.", 409);
    }
    const credentials = await hashPassword(body.passcode);
    const userId = crypto.randomUUID();
    const verificationToken = randomToken();
    const verificationTokenHash = await sha256(verificationToken);
    const now = Date.now();
    this.sql.exec(
      `INSERT INTO users (
         id, email, username, password_salt, password_hash, created_at,
         verified_at, verification_token_hash, verification_expires_at
       ) VALUES (?, ?, ?, ?, ?, ?, NULL, ?, ?)`,
      userId,
      email,
      username,
      credentials.salt,
      credentials.hash,
      now,
      verificationTokenHash,
      now + EMAIL_CONFIRMATION_LIFETIME_MS
    );
    try {
      await this.sendConfirmationEmail(request, email, username, verificationToken);
    } catch (error) {
      this.sql.exec("DELETE FROM users WHERE id = ?", userId);
      console.error("Retro Run confirmation email failed", error);
      return errorResponse("We could not send the confirmation email. Try again soon.", 503);
    }
    this.clearAuthAttempts(rate.rateKey);
    return jsonResponse(
      { authenticated: false, requiresVerification: true, email, username },
      201
    );
  }

  async handleConfirmation(request) {
    const token = new URL(request.url).searchParams.get("token") || "";
    const redirect = new URL("/", request.url);
    if (token.length < 32) {
      redirect.searchParams.set("email", "invalid");
      return Response.redirect(redirect.toString(), 302);
    }
    const tokenHash = await sha256(token);
    const user = this.one(
      `SELECT id, email, username, verification_expires_at FROM users
       WHERE verification_token_hash = ?`,
      tokenHash
    );
    if (!user || user.verification_expires_at <= Date.now()) {
      redirect.searchParams.set("email", "expired");
      return Response.redirect(redirect.toString(), 302);
    }
    this.sql.exec(
      `UPDATE users SET verified_at = ?, verification_token_hash = NULL,
       verification_expires_at = NULL WHERE id = ?`,
      Date.now(),
      user.id
    );
    const sessionToken = await this.createSession(user.id);
    redirect.searchParams.set("email", "confirmed");
    return new Response(null, {
      status: 302,
      headers: {
        Location: redirect.toString(),
        "Set-Cookie": sessionCookie(sessionToken),
        "Cache-Control": "no-store",
      },
    });
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
      `SELECT id, email, username, password_salt, password_hash, verified_at FROM users
       WHERE username = ?`,
      username
    );
    const valid = user && typeof body.passcode === "string"
      ? await verifyPassword(body.passcode, user.password_salt, user.password_hash)
      : false;
    if (!valid) return errorResponse("Incorrect username or passcode.", 401);
    if (!user.verified_at) return errorResponse("Confirm your email before signing in.", 403);
    const token = await this.createSession(user.id);
    this.clearAuthAttempts(rate.rateKey);
    return jsonResponse(
      { authenticated: true, email: user.email, username: user.username },
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

  async fetch(request) {
    const url = new URL(request.url);
    if (["POST", "PUT", "DELETE"].includes(request.method) && !sameOriginRequest(request)) {
      return errorResponse("Cross-origin request blocked.", 403);
    }
    try {
      if (url.pathname === "/api/auth/session" && request.method === "GET") {
        const user = await this.currentUser(request);
        return jsonResponse(user
          ? { authenticated: true, email: user.email, username: user.username }
          : { authenticated: false });
      }
      if (url.pathname === "/api/auth/signup" && request.method === "POST") {
        return this.handleSignup(request);
      }
      if (url.pathname === "/api/auth/confirm" && request.method === "GET") {
        return this.handleConfirmation(request);
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
        emailConfirmation: Boolean(env.EMAIL),
        duplicateEmailTest: duplicateEmailsAllowed(env.ALLOW_DUPLICATE_EMAILS),
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
