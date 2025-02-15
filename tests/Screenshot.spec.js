import { test, expect } from '@playwright/test';

test('Page Screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' });
});

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true });	
});

test('Element Screenshot', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({ path: 'tests/screenshots/' + Date.now() + 'Element.png'});
});

// screenshot 'on' in playwright.config.js
test.only('Screenshot on', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
});
