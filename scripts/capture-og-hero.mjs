/**
 * Captures the live #hero section for Open Graph / social previews.
 *
 * Usage:
 *   1. Start the app: npm run dev
 *   2. In another terminal: npm run capture:og
 *
 * Optional: CAPTURE_BASE_URL=http://127.0.0.1:8081 npm run capture:og
 * (Use the port shown by `vite dev`, often 8080 or 8081.)
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "og-hero.png");

const baseUrl = (process.env.CAPTURE_BASE_URL ?? "http://127.0.0.1:8080").replace(/\/$/, "");

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function main() {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const res = await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 60_000 });
    if (!res?.ok()) {
      throw new Error(`Failed to load ${baseUrl}/ (status ${res?.status()})`);
    }

    const hero = page.locator("#hero");
    await hero.waitFor({ state: "visible", timeout: 30_000 });
    // Let fonts, images, and entrance animations settle
    await new Promise((r) => setTimeout(r, 2200));

    const box = await hero.boundingBox();
    if (!box) {
      throw new Error("#hero has no bounding box");
    }

    const clipWidth = Math.min(Math.round(box.width), OG_WIDTH);
    const clipHeight = Math.min(Math.round(box.height), OG_HEIGHT);
    const clip = {
      x: Math.round(box.x),
      y: Math.round(box.y),
      width: clipWidth,
      height: clipHeight,
    };

    const buf = await page.screenshot({ type: "png", clip });
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, buf);
    console.log(`Wrote ${outPath} (${clipWidth}×${clipHeight} from hero top-left)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
