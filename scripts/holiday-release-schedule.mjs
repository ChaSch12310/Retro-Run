import { appendFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RELEASES = Object.freeze({
  standard: { profile: "standard", message: "Current Retro Run" },
  "upside-down-arcade": { profile: "upside-down-arcade", message: "April Fools - Upside-Down Arcade" },
  "firework-flyer": { profile: "firework-flyer", message: "Fourth of July - Firework Flyer" },
  "pumpkin-panic": { profile: "pumpkin-panic", message: "Halloween - Pumpkin Panic" },
  "turkey-trot-trouble": { profile: "turkey-trot-trouble", message: "Thanksgiving - Turkey Trot Trouble" },
  "holiday-season": { profile: "holiday-season", message: "Holiday Season Collection" },
  "midnight-rush": { profile: "midnight-rush", message: "New Year's Eve - Midnight Rush" },
});

export const HOLIDAY_RELEASE_TRANSITIONS = Object.freeze({
  "01-03": RELEASES.standard,
  "03-30": RELEASES["upside-down-arcade"],
  "04-03": RELEASES.standard,
  "07-01": RELEASES["firework-flyer"],
  "07-06": RELEASES.standard,
  "10-24": RELEASES["pumpkin-panic"],
  "11-02": RELEASES.standard,
  "11-21": RELEASES["turkey-trot-trouble"],
  "11-30": RELEASES.standard,
  "12-08": RELEASES["holiday-season"],
  "12-29": RELEASES["midnight-rush"],
});

export function releaseForMonthDay(monthDay) {
  return HOLIDAY_RELEASE_TRANSITIONS[monthDay] || null;
}

export function centralMonthDay(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.month}-${values.day}`;
}

function selectedRelease() {
  const forcedProfile = process.env.RETRO_RUN_FORCE_PROFILE?.trim();
  if (forcedProfile && forcedProfile !== "auto") {
    if (!RELEASES[forcedProfile]) throw new Error(`Unknown forced release profile: ${forcedProfile}`);
    return RELEASES[forcedProfile];
  }
  const monthDay = process.env.RETRO_RUN_SCHEDULE_DATE?.trim() || centralMonthDay();
  const release = releaseForMonthDay(monthDay);
  if (!release) throw new Error(`No Retro Run release transition is scheduled for ${monthDay}.`);
  return release;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const release = selectedRelease();
  const output = process.env.GITHUB_OUTPUT;
  if (output) {
    appendFileSync(output, `profile=${release.profile}\n`);
    appendFileSync(output, `message=${release.message}\n`);
  }
  process.stdout.write(`${JSON.stringify(release)}\n`);
}
