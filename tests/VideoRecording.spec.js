import { test, expect } from '@playwright/test';

test.only('Video Recording', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#logout2')).toBeVisible();
});
