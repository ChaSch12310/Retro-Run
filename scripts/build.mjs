import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const distDirectory = fileURLToPath(new URL("../dist/", import.meta.url));
const seasonalProfile = process.env.RETRO_RUN_SEASONAL_PROFILE || "holiday-season";

if (!/^[a-z0-9-]+$/.test(seasonalProfile)) {
  throw new Error(`Invalid seasonal profile: ${seasonalProfile}`);
}

await rm(distDirectory, { recursive: true, force: true });
await mkdir(distDirectory, { recursive: true });

await Promise.all([
  cp(`${projectRoot}index.html`, `${distDirectory}index.html`),
  cp(`${projectRoot}styles.css`, `${distDirectory}styles.css`),
  cp(`${projectRoot}game.js`, `${distDirectory}game.js`),
  cp(`${projectRoot}seasonal-games.js`, `${distDirectory}seasonal-games.js`),
  writeFile(
    `${distDirectory}seasonal-profile.js`,
    `globalThis.RETRO_RUN_SEASONAL_PROFILE = ${JSON.stringify(seasonalProfile)};\n`
  ),
  cp(`${projectRoot}assets`, `${distDirectory}assets`, { recursive: true }),
]);
