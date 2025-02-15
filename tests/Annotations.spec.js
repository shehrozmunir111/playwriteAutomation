import { test, expect } from '@playwright/test';

/*test.only('Test1', async ({ page }) => {
    console.log('Test 1');
});

test.skip('Test2', async ({ page }) => {
    console.log('Test 2');
});

// This test will be skipped for chromium browser
test('Test3', async ({ page, browserName }) => {
    console.log('Test 3');
    if (browserName === 'chromium') {
        test.skip();
    }
});*/

// Fixme: This test will be skipped for chromium browser
test('Test4', async ({ page, browserName }) => {
    test.fixme();
    console.log('Test 4');
});

// Fail: This test will fail
test('Test5', async ({ page }) => {
    test.fail();
    console.log('Test 5');
    expect(1).toBe(1);
});


