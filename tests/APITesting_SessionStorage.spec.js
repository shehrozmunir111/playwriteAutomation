const { test, expect } = require('@playwright/test');

let webContext;
const email = "shehroz@gmail.com";

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Shehroz@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');

    //save the state of the page
    await context.storageState({ path: "state.json" });
    // Invoke browser by injecting the state.json file
    webContext = await browser.newContext({ storageState: "state.json" });

})

test('Client App login', async () => {
    const productName = 'Zara Coat 3';

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");

    await page.waitForLoadState('networkidle');

    const products = page.locator(".card-body");

    const titles = await page.locator(".card-body b").allTextContents();
    console.log("titles:", titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName.toUpperCase()) {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();

    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');

    // Verify cart items before interacting
    await page.locator(".cartSection h3").first().waitFor();

    const cartItems = await page.locator(".cartSection h3").allTextContents();
    console.log('cart items:', cartItems);

    // Validate specific product presence
    const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
    expect(bool).toBeTruthy();

    // Proceed to checkout
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").type("ind", { delay: 100 });
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    let optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        let text = await dropdown.locator("button").nth(i).textContent();
        if (text.trim() === "India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");


    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
});

test('Login and Print all the products', async () => {

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");

    await page.waitForLoadState('networkidle');

    const products = page.locator(".card-body");

    const titles = await page.locator(".card-body b").allTextContents();
    console.log("titles:", titles);
});
