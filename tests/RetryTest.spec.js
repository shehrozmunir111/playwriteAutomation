import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';

test('Test', async ({ page }) => {

    // Login Page
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol', 'test@123');
    await expect(page.locator('#logout2')).toBeVisible();

    // Home page
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await homePage.gotoCart();

    // Cart Page
    const cartPage = new CartPage(page);
    await page.waitForTimeout(5000)
    const status = await cartPage.checkProductsInCart('Nexus 6');
    await expect(status).toBeTruthy();
    expect(await status).toBe(true);
});