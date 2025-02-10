import { test, expect } from '@playwright/test';

test('Multi Select Dropdown Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Select multiple options from multi select dropdown
  //await page.selectOption('#colors', ['Blue', 'Green', 'Yellow']);

  //1) Assertions
  // check number of options in dropdown
  //const options = await page.locator('#colors option');
  //await expect(options).toHaveCount(7);

  //2) check number of options in dropdown using JS array
  //const options = await page.$$('#colors option'); // $$ means array of elements
  //await expect(options.length).toBe(7);
  //const options = await page.$$eval('#colors option', (elements) => elements.length); // $$eval means evaluate the array of elements
  //console.log(options);
  //expect(options).toBe(7);

  //3) check presence of the value in dropdown
  const dropdownContent = await page.locator('#colors').textContent();
  await expect(dropdownContent.includes('Blue')).toBeTruthy();

  //4) check presence of the value in dropdown using loop
  const options = await page.$$('#colors option');
  for (const option of options) {
    const optionText = await option.textContent();
    console.log('Option Text:', optionText);
  }






});
