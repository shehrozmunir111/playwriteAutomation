import { test, expect } from '@playwright/test';

test('Test1', async ({page})=> {
    await page.goto("https://demoblaze.com/index.html");
    await expect(page).toHaveTitle('STORE');
});

test('Test2', async ({page})=> {
    await page.goto("https://demo.opencart.com/");
    await expect(page).toHaveTitle('Your Store');
});

test('Test3', async ({page})=> {
    await page.goto("https://demo.nopCommerce.com");
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
});

// For list: npx playwright test Reporters.spec.js --project=chromium --reporter=list
// For line: npx playwright test Reporters.spec.js --project=chromium --reporter=line
// For Dot: npx playwright test Reporters.spec.js --project=chromium --reporter=dot
// For html: npx playwright test Reporters.spec.js --project=chromium --reporter=html
// For Json: npx playwright test Reporters.spec.js --project=chromium --reporter=json but first set the environment variable
// For JUnit: npx playwright test Reporters.spec.js --project=chromium --reporter=junit but first set the environment variable