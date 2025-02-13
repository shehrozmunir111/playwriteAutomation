import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // fill the text in the textarea
    //await page.locator('name="text1"').fill('Hello World!');
    await page.keyboard.type('Hello World!');

    // Ctrl + A
    await page.keyboard.press('Control+A');
    // Ctrl + C
    await page.keyboard.press('Control+C');

    // Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl + V
    await page.keyboard.press('Control+V');

});
