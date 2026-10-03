import { expect, test } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

test('homepage has no console errors or horizontal overflow and saves review captures', async ({ page }, testInfo) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto('/');
  await page.locator('main').waitFor();
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete));
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(hasOverflow).toBe(false);
  expect(consoleErrors).toEqual([]);

  const outputDir = path.resolve('artifacts/review-screenshots');
  await mkdir(outputDir, { recursive: true });
  const fileName = testInfo.project.name === 'mobile' ? 'homepage-390x844.png' : 'homepage-1440x900.png';
  await page.screenshot({ path: path.join(outputDir, fileName), fullPage: true });
});

test('mobile navigation is keyboard accessible and does not overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Mobile-only navigation check');
  await page.goto('/');
  const firstLink = page.locator('.primary-nav a').first();
  await firstLink.focus();
  await expect(firstLink).toBeFocused();
  await expect(page.locator('.primary-nav')).toBeVisible();
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(hasOverflow).toBe(false);
});
