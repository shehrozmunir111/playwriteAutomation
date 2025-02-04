import { test, expect } from '@playwright/test';

test('Assertions Test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  await expect(page.locator('.header-logo')).toBeVisible();

  // Locate the logo element (adjust CSS selector as needed)

  const logoElement = await page.locator('.header-logo'); 



  // Check if the logo has a link

  const logoLink = await logoElement.getAttribute('href');



  if (logoLink) {

    console.log("Logo has a link:", logoLink);

  } else {

    console.log("Logo does not have a link");

  }
  
  

  /*await expect(page.locator('#gender-male')).toBeVisible();
  await expect(page.locator('#gender-male')).toBeChecked();


  await expect(page.locator('#FirstName')).toBeEmpty();

  await expect(page.locator('#FirstName')).toBeVisible();

  await expect(page.locator('#FirstName')).toBeEditable();
  */
  
  
});

