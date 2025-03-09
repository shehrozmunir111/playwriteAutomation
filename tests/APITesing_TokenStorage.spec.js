import { test, expect, request } from '@playwright/test';
import { APiUtils } from '../utils/APiUtils.js';

const loginPayload = {
    userEmail: 'shehroz@gmail.com',
    userPassword: 'Shehroz@000'
}
const orderPayload = {
    orders: [{
        country: "Cuba",
        productOrderedId: "67a8dde5c0d3e6622a297cc8"
    }]
};
let token;
let orderId;
let response;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    
    const apiUtils = new APiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);
    token = response.token;
    orderId = response.orderId;
    
    console.log("token:",token);
    console.log("orderId:",orderId);
});

test('Place the order', async ({ page }) => {
    // Add token to local storage FIRST
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    // THEN navigate to the page
    await page.goto("https://rahulshettyacademy.com/client/");

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Click on the my orders button
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    // Iterate through the rows and click on the order id that matches the order id
    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});

