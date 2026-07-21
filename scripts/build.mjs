import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const distDirectory = fileURLToPath(new URL("../dist/", import.meta.url));

await rm(distDirectory, { recursive: true, force: true });
await mkdir(distDirectory, { recursive: true });

await Promise.all([
  cp(`${projectRoot}index.html`, `${distDirectory}index.html`),
  cp(`${projectRoot}styles.css`, `${distDirectory}styles.css`),
  cp(`${projectRoot}game.js`, `${distDirectory}game.js`),
  cp(`${projectRoot}assets`, `${distDirectory}assets`, { recursive: true }),
]);
