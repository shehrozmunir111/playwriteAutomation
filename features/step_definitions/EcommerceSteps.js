const { Given, When, Then, After } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');

Given('a login to the ecommerce website with {string} and {string}',
    { timeout: 60 * 1000 },
    async function (username, password) {

        this.loginPage = this.poManager.getLoginPage();
        await this.loginPage.goTo();

        // Add login validation
        await expect(this.page).toHaveURL(/\/auth/);

        await this.loginPage.validLogin(username, password);

        // Verify successful login
        await expect(this.page).toHaveURL(/\/dashboard/);
    });

When('Add {string} to the cart', { timeout: 100 * 1000 }, async function (productName) {
    this.dashboardPage = this.poManager.getDashboardPage();

    // Wait for dashboard to load after login
    await this.page.waitForURL(/\/dashboard/);

    // Retry logic for flaky operations
    await expect(async () => {
        await this.dashboardPage.searchProductAddCart(productName);
    }).toPass({
        intervals: [1000, 2000, 5000],
        timeout: 15000
    });

    // Verify cart count before navigation
    const cartCount = await this.page.locator("[routerlink*='cart'] label").textContent();
    expect(parseInt(cartCount)).toBeGreaterThan(0);

    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the cart', { timeout: 100 * 1000 }, async function (productName) {
    this.cartPage = this.poManager.getCartPage();
    await this.cartPage.VerifyProductIsDisplayed(productName);
    await this.cartPage.Checkout();
});

When('Enter valid details and place the order', { timeout: 100 * 1000 }, async function () {
    this.ordersReviewPage = this.poManager.getOrdersReviewPage();
    await this.ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await this.ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify the order is present in the orders history', { timeout: 100 * 1000 }, async function () {
    await this.dashboardPage.navigateToOrders();
    this.ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await this.ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await this.ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to the ecommerce2 website with {string} and {string}', async function (username, password) {
    const userName = this.page.locator('#username');
    const signIn = this.page.locator("#signInBtn");

    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());

    await userName.fill(username);
    await this.page.locator("[type='password']").fill(password);
    await signIn.click();
});

Then('Verify Error message is displayed', async function () {
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect')
});

/*await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      //css 
     await userName.type("rahulshetty");
     await page.locator("[type='password']").type("learning");
     await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');*/