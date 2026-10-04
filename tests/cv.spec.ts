import { expect, test } from '@playwright/test';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

test('CV presents the concise supplied history and saves a responsive review capture', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/cv/');
  await expect(page.locator('main h1')).toHaveText('CV');
  await expect(page.locator('.cv-summary h2')).toHaveText([
    'Experience', 'Education', 'Technical strengths', 'Selected recognition',
  ]);
  await expect(page.locator('main')).toContainText('Yaala Labs');
  await expect(page.locator('main')).toContainText('University of Moratuwa');
  await expect(page.locator('main')).toContainText('Oct 2023–present');
  await expect(page.locator('main')).not.toContainText('PDF pending');
  await expect(page.locator('main')).not.toContainText('PDF status');
  await expect(page.getByRole('link', { name: 'Email', exact: true }).last()).toHaveAttribute(
    'href', 'mailto:chirathyh@hotmail.com',
  );
  await expect(page.locator('.profile-portrait img')).toHaveJSProperty('complete', true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
  expect(errors).toEqual([]);

  await mkdir('artifacts/review-screenshots', { recursive: true });
  const filename = testInfo.project.name === 'mobile' ? 'cv-390x844.png' : 'cv-1440x900.png';
  await page.screenshot({ path: path.join('artifacts/review-screenshots', filename), fullPage: true });
});

test('CV download delivers the selected industry PDF with its expected filename', async ({ page }) => {
  await page.goto('/cv/');
  const button = page.getByRole('link', { name: 'Download CV', exact: true });
  await expect(button).toHaveAttribute('href', '/files/Industry-CV-2026.pdf');
  await expect(button).toHaveAttribute('download', 'Industry-CV-2026.pdf');
  await button.focus();
  await expect(button).toBeFocused();
  const downloadPromise = page.waitForEvent('download');
  await button.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('Industry-CV-2026.pdf');
  expect(await download.failure()).toBeNull();
  const downloadedPath = await download.path();
  expect(downloadedPath).not.toBeNull();
  const actual = await readFile(downloadedPath!);
  const expected = await readFile('public/files/Industry-CV-2026.pdf');
  expect(actual.subarray(0, 5).toString()).toBe('%PDF-');
  expect(actual.equals(expected)).toBe(true);
});
