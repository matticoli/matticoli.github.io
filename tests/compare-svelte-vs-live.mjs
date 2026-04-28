/**
 * Playwright visual comparison: local Svelte dev server vs live matticoli.net
 *
 * Usage:
 *   1. cd src && npm install && npm run dev -- --port 5173
 *   2. node tests/compare-svelte-vs-live.mjs
 *
 * Outputs screenshots to tests/screenshots/
 */

import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { mkdirSync } from 'fs';

const SCREENSHOTS_DIR = new URL('./screenshots/', import.meta.url).pathname;
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });

  const livePage = await context.newPage();
  await livePage.goto('https://matticoli.net', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await livePage.waitForTimeout(2000);

  const localPage = await context.newPage();
  await localPage.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await localPage.waitForTimeout(2000);

  // Full-page screenshots
  await livePage.screenshot({ path: `${SCREENSHOTS_DIR}live_full.png`, fullPage: true });
  await localPage.screenshot({ path: `${SCREENSHOTS_DIR}svelte_full.png`, fullPage: true });

  // Header crop
  const headerClip = { x: 0, y: 0, width: 1280, height: 80 };
  await livePage.screenshot({ path: `${SCREENSHOTS_DIR}live_header.png`, clip: headerClip });
  await localPage.screenshot({ path: `${SCREENSHOTS_DIR}svelte_header.png`, clip: headerClip });

  // Hero section
  const heroClip = { x: 0, y: 0, width: 1280, height: 400 };
  await livePage.screenshot({ path: `${SCREENSHOTS_DIR}live_hero.png`, clip: heroClip });
  await localPage.screenshot({ path: `${SCREENSHOTS_DIR}svelte_hero.png`, clip: heroClip });

  // Content comparison
  const liveLinks = await livePage.$$eval('a', els =>
    els.map(e => ({ text: e.textContent.trim(), href: e.href })).filter(l => l.text)
  );
  const localLinks = await localPage.$$eval('a', els =>
    els.map(e => ({ text: e.textContent.trim(), href: e.href })).filter(l => l.text)
  );

  const liveHeadings = await livePage.$$eval('h1, h2', els =>
    els.map(e => e.textContent.trim()).slice(0, 10)
  );
  const localHeadings = await localPage.$$eval('h1, h2', els =>
    els.map(e => e.textContent.trim()).slice(0, 10)
  );

  console.log('\n=== COMPARISON REPORT ===\n');
  console.log('Live title:', await livePage.title());
  console.log('Svelte title:', await localPage.title());
  console.log('\n--- Headings ---');
  console.log('Live:  ', liveHeadings);
  console.log('Svelte:', localHeadings);
  console.log('\n--- Nav links ---');
  console.log('Live:  ', liveLinks.slice(0, 5));
  console.log('Svelte:', localLinks.slice(0, 5));
  console.log('\nScreenshots written to', SCREENSHOTS_DIR);

  await browser.close();
})();
