import { test, expect } from '@playwright/test';

test('Input Box Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // input first name
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#name')).toBeEmpty();
  await expect(page.locator('#name')).toBeEditable();
  await expect(page.locator('#name')).toBeEnabled();

  await page.locator('#name').fill('John');  
  await expect(page.locator('#name')).toHaveValue('John');

  // radio button
  await page.locator('#male').check();
  await expect(page.locator('#male')).toBeChecked();
  await expect(page.locator('#male').isChecked()).toBeTruthy();
  // check female is unchecked
  await expect(page.locator('#female')).not.toBeChecked();
  
  await expect(page.locator('#male').isVisible()).toBeTruthy();
  await expect(page.locator('#male').isEnabled()).toBeTruthy();
  await expect(page.locator('#male').isEditable()).toBeTruthy();
  // check male is not disabled and not hidden
  const isDisabled = await page.locator('#male').isDisabled();
  expect(isDisabled).toBeFalsy();
  const isHidden = await page.locator('#male').isHidden();
  expect(isHidden).toBeFalsy();
});
