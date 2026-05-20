import { existsSync } from "node:fs";

/** Fail Vercel CI when the Nitro preset did not emit Build Output API files. */
const onVercel =
  process.env.VERCEL === "1" ||
  process.env.VERCEL === "true" ||
  Boolean(process.env.VERCEL_ENV);

if (!onVercel) {
  process.exit(0);
}

const configPath = ".vercel/output/config.json";
if (!existsSync(configPath)) {
  console.error(
    "[build] Expected .vercel/output from the Nitro Vercel preset but it is missing.\n" +
      "Ensure vite.config.ts enables nitro({ preset: \"vercel\" }) when VERCEL=1.",
  );
  process.exit(1);
}

console.log("[build] Verified Vercel Build Output API at .vercel/output");
