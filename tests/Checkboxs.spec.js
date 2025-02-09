import { test, expect } from '@playwright/test';

test('Checkboxs Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // single checkbox
  await page.locator('#sunday').check();
  await expect(page.locator('#sunday')).toBeChecked();
  await expect(page.locator('#sunday').isChecked()).toBeTruthy();

  // uncheck checkbox
  await page.locator('#sunday').uncheck();
  await expect(page.locator('#sunday')).not.toBeChecked();
  const isChecked = await page.locator('#sunday').isChecked();
  expect(isChecked).toBeFalsy();

  // multiple checkboxes
  const checkboxes = ["#monday", "#tuesday", "#wednesday", "#thursday", "#friday"];
  for (const checkbox of checkboxes) {
    await page.locator(checkbox).check();
    await expect(page.locator(checkbox)).toBeChecked();
    await expect(page.locator(checkbox).isChecked()).toBeTruthy();
  }

  // uncheck all checkboxes
  for (const checkbox of checkboxes) {
    await page.locator(checkbox).uncheck();
    await expect(page.locator(checkbox)).not.toBeChecked();
    const isChecked = await page.locator(checkbox).isChecked();
    expect(isChecked).toBeFalsy();
  }

  // verify all checkboxes are unchecked
  for (const checkbox of checkboxes) {
    const isChecked = await page.locator(checkbox).isChecked();
    expect(isChecked).toBeFalsy();
  }
  
  // how many checkboxes are there for class 'form-check-input' and type checkbox
  const numberOfCheckboxes = await page.locator('.form-check-input[type="checkbox"]').count();
  console.log(`Number of checkboxes: ${numberOfCheckboxes}`);

  // all names for class 'form-check-label'
  const checkboxesNames = await page.locator('.form-check-label').allInnerTexts();
  console.log(`Checkboxes names: ${checkboxesNames}`);
});

