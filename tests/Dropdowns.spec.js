import { test, expect } from '@playwright/test';

test('Dropdowns Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // multiple ways to select an option from dropdown
  //await page.locator('#country').selectOption('Germany');
  //await page.locator('#country').selectOption({label: 'Garmany'});
  //await page.locator('#country').selectOption({value: 'germany'});
  //await page.locator('#country').selectOption({index: 3});
  //await page.selectOption('#country', 'Germany');

  // ----Assertions----
  //1) check number of options in dropdown - Approach 1
  //const options = await page.locator('#country option');
  //await expect(options).toHaveCount(10);

  //2) check number of options in dropdown - Approach 2
  //const options = await page.$$('#country option');
  //console.log('Number of options:', options.length);
  //await expect(options.length).toBe(10);

  //3) check presence of the value in dropdown - Approach 1
  //const dropdownContent = await page.locator('#country').textContent();
  //await expect(dropdownContent.includes('Germany')).toBeTruthy();

  //4) check presence of the value in dropdown - Approach 2 (using loop)
  /*const options = await page.$$('#country option');
  let status = false;
  for (const option of options) {
    //console.log(await option.textContent());
    const text = await option.textContent();
    if (text.includes('Germany')) {
      status = true;
      break;
    }
  }
  await expect(status).toBeTruthy();*/

  //5) select option from dropdown using loop

  //wait for the dropdown to be visible
  await page.waitForSelector('#country');
  const options = await page.$$('#country option');

  for (const option of options) {
    let text = await option.textContent();
    if (text && text.includes('Germany')) {
      await page.selectOption('#country', { label: text.trim() });
      break;
    }
  }
});

