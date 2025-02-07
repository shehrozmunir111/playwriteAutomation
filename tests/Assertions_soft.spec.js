import { test, expect } from '@playwright/test';

test('Assertions_soft Test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  // Hard Assertions - if the assertion fails, the test will stop and the test will fail
  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://demoblaze.com/index.html');
  await expect(page.locator('.navbar-brand')).toBeVisible();


  // Soft Assertions - if the assertion fails, the test will continue and the test will fail
  await expect.soft(page).toHaveTitle('STORE123');
  await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
  await expect.soft(page.locator('.navbar-brand')).toBeVisible();
  

});

