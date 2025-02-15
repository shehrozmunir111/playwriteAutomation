import { test, expect } from '@playwright/test';

test('Test1@sanity', async ({ page }) => {
    console.log('Test 1');
});

test('Test2@sanity', async ({ page }) => {
    console.log('Test 2');
});

test('Test3@regression', async ({ page }) => {
    console.log('Test 3');
});

test('Test4@regression', async ({ page }) => {
    console.log('Test 4');
});

test('Test5@sanity@regression', async ({ page }) => {
    console.log('Test 5');
});

// Run the command: npx playwright test Tags.spec.js --project=chromium

// ----It will run all the tests----

// Run the command: npx playwright test Tags.spec.js --project=chromium --grep "@sanity"

// ----It will run all the sanity tests----

// Run the command: npx playwright test Tags.spec.js --project=chromium --grep "@regression"

// ----It will run all the regression tests----

// Run the command: npx playwright test Tags.spec.js --project=chromium --grep "@sanity@regression"

// ----It will run only the test in which both @sanity@regression tag is present----

// Run the command: npx playwright test Tags.spec.js --project=chromium --grep-invert "@sanity"

// ----It will run all the tests except the sanity tests----














