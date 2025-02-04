const {test, expect} = require('@playwright/test');

test('Home Page Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    //Verify the presence of the logo
    const logo = page.locator('#nava');
    await expect(logo).toBeVisible();   

    //Verify the presence of the navigation links
    const links = ['Home', 'Contact', 'About us', 'Cart', 'Log in', 'Sign up'];
    for (const link of links) {
        await expect(page.locator(`a:has-text("${link}")`)).toBeVisible();
    }
    
    await page.close();
    
});



