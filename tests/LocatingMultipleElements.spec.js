import { test, expect } from '@playwright/test';

test('Locating Multiple Elements', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    
    // Locate all the links on the page
    const links = await page.$$('a');
    console.log("All the links on the page are: ");
    console.log(links.length);

    for (const link of links) {
        console.log(await link.textContent());
    }


    // Locate all the products displayed on Home Page
    await page.waitForSelector('//div[@id="tbodyid"]//h4/a');
    const productNames = await page.$$('//div[@id="tbodyid"]//h4/a');
    console.log("All the products on the page are: ");
    console.log(productNames.length);


    for (const productName of productNames) {
        console.log(await productName.textContent());
    }
    await page.close();


});
	