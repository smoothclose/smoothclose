import { expect, test } from '@playwright/test';

test('First e2e test', async ({ page }) => {
	await page.goto('/');
	await expect(1 + 2).toBe(3);
});
