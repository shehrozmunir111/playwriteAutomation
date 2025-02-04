import { test, expect } from '@playwright/test';

test('Locators Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // click on the login button by using the Property Locator
    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // Provide the username by CSS Locator
    await page.locator('#loginusername').fill('pavanol');
    //await page.fill('css=input[id="loginusername"]', 'pavanol');

    // Provide the password by CSS Locator
    // await page.locator('#loginpassword').fill('test@123');
    await page.fill('css=input[id="loginpassword"]', 'test@123');

    // Click on the login button by using the Xpath Locator
    await page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]").click();

    // Verify the Logout button is visible
    await expect(page.locator('id=logout2')).toBeVisible();

    // Click on the Logout button
    await page.locator('id=logout2').click();

    // Verify the Login button is visible
    await expect(page.locator('id=login2')).toBeVisible();

    await page.close();
});