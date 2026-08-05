import { spawn } from "node:child_process";
import { seasonalDeployments } from "./seasonal-deployments.mjs";

const requestedProfile = process.argv.find((argument) => argument.startsWith("--profile="))?.split("=")[1];
const releaseName = process.env.RETRO_RUN_RELEASE_NAME?.trim();
const deployments = requestedProfile
  ? seasonalDeployments.filter((deployment) => deployment.profile === requestedProfile)
  : seasonalDeployments;

if (deployments.length === 0) {
  throw new Error(`Unknown seasonal deployment profile: ${requestedProfile}`);
}

function run(command, args, extraEnvironment = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      env: { ...process.env, ...extraEnvironment },
      stdio: "inherit",
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

for (const deployment of deployments) {
  const versionMessage = releaseName ? `${releaseName} - ${deployment.message}` : deployment.message;
  process.stdout.write(`\n=== ${versionMessage} ===\n`);
  await run("pnpm", ["run", "build"], {
    RETRO_RUN_SEASONAL_PROFILE: deployment.profile,
  });
  await run("pnpm", [
    "exec",
    "wrangler",
    "versions",
    "upload",
    "--strict",
    "--message",
    versionMessage,
  ]);
}

process.stdout.write(`\nUploaded ${deployments.length} seasonal Cloudflare versions.\n`);
