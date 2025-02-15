import { test, expect } from '@playwright/test';

// set the trace to on in playwright.config.js
// Run the command: npx playwright test Tracing.spec.js --project=chromium
// trace.zip file will be created in the test-results folder
// Right click on the trace.zip file and copy the relative path
// Run the command: npx playwright show-trace test-results\Tracing-Video-Recording-chromium\trace.zip
// This will open the trace in the browser

test('Video Recording', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#logout2')).toBeVisible();
});