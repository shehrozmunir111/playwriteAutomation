import { test, expect } from '@playwright/test';

test.beforeAll(async ({ browser }) => {
    console.log('Before All');
});

test.afterAll(async () => {
    console.log('After All');
});

test.beforeEach(async ({ page }) => {
    console.log('Before Each');
});

test.afterEach(async () => {
    console.log('After Each');
});

test.describe('Group 1', () => {
    test('Test 1', async ({ page }) => {
        console.log('Test 1');
    });

    test('Test 2', async () => {
        console.log('Test 2');
    });
});

test.describe('Group 2', () => {
    test('Test 3', async () => {
        console.log('Test 3');
    });

    test('Test 4', async () => {
        console.log('Test 4');
    });

    test('Test 5', async () => {
        console.log('Test 5');
    });
});


