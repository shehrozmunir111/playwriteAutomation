import { test, expect } from '@playwright/test';

test('Auto Suggest Dropdown Test', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  //1) Select the city
  await page.locator('#src').fill('Delhi');
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

  await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
  const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
  for (const option of fromCityOptions) {
    const value = await option.textContent();
    console.log(value);
    if (value.includes('Anand Vihar')) {
      await option.click();
      break;
    }


  }
});
