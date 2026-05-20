// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only, skipped on Vercel),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { nitro } from "nitro/vite";

// Vercel runs Node/serverless, not Cloudflare Workers. Use Nitro on Vercel (see
// https://vercel.com/docs/frameworks/full-stack/tanstack-start); keep Cloudflare
// for local and non-Vercel builds (e.g. wrangler deploy).
/** Vercel sets VERCEL=1 / VERCEL_ENV during builds; also force preset via vercel.json if needed. */
const deployVercel =
  process.env.VERCEL === "1" ||
  process.env.VERCEL === "true" ||
  Boolean(process.env.VERCEL_ENV) ||
  process.env.NITRO_PRESET === "vercel";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: deployVercel ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: deployVercel ? [nitro({ preset: "vercel" })] : [],
});
