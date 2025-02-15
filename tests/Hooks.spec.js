import { test, expect } from '@playwright/test';

let page;

/*test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('#logInModal').getByRole('button', { name: 'Log in' }).click();
    //await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterEach(async () => {
    // Logout
    await page.locator('#logout2').click();
});
*/

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('#logInModal').getByRole('button', { name: 'Log in' }).click();
    //await page.locator('//button[normalize-space()="Log in"]').click();
});

test.afterAll(async () => {
    // Logout
    await page.locator('#logout2').click();
});

test('Hooks: Home Page Test', async () => {    

    // Verify the total number of products
    //await page.waitForSelector('.hrefch');
    const totalProducts = await page.$$('.hrefch');
    console.log('Total Products: ', totalProducts.length); // Logs the actual length
    expect(totalProducts).toHaveLength(9);
});

test('Hooks: Add Product to Cart', async () => {

    // Add Product to Cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });
});

