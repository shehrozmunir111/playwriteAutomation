import { test, expect } from '@playwright/test';

test('Assertions Test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  await expect(page.locator('.header-logo')).toBeVisible();

  // chech href="/" is link or not and print the text of the link
  await page.waitForSelector('a[href="/"]');
  const logoElement = await page.locator('a[href="/"]'); 
  // Check if the logo has a link
  const logoLink = await logoElement.getAttribute('href');
  if (logoLink) {
    console.log("Logo has a link:", logoLink);
  } else {
    console.log("Logo does not have a link");
  }
  
  // verify search box is enabled
  await expect(page.locator('#small-searchterms')).toBeEnabled();
  // verify search box is visible
  await expect(page.locator('#small-searchterms')).toBeVisible();
  // verify search box is editable
  await expect(page.locator('#small-searchterms')).toBeEditable();
  
  // check the radio button is visible and checked or not
  await expect(page.locator('#gender-male')).toBeVisible();
  await expect(page.locator('#gender-female')).toBeVisible();
  await page.locator('#gender-male').click();
  await expect(page.locator('#gender-male')).toBeChecked();

  // check the checkbox is visible and already checked or not
  await expect(page.locator('#Newsletter')).toBeVisible();
  await expect(page.locator('#Newsletter')).toBeChecked();

  // register button has type submit or not
  await expect(page.locator('#register-button')).toHaveAttribute('type', 'submit');
  // register button is visible and enabled or not
  await expect(page.locator('#register-button')).toBeVisible();
  await expect(page.locator('#register-button')).toBeEnabled();

  // toHaveText verify the text we have provided (compare the text)
  await expect(page.locator('.page-title h1')).toHaveText('Register');
  // toContainText verify the text is present in the button or not
  await expect(page.locator('.page-title h1')).toContainText('Reg');
  // toHaveValue verify the input box has value or not
  const emailInput = page.locator('#Email');
  await emailInput.fill('shehroz@gmail.com');
  await expect(emailInput).toHaveValue('shehroz@gmail.com');
  
  // get how many options are present in the dropdown
  const dayOptions = await page.locator('select[name="DateOfBirthDay"] option').count();
  console.log(dayOptions);
  const monthOptions = await page.locator('select[name="DateOfBirthMonth"] option').count();
  console.log(monthOptions);
  const yearOptions = await page.locator('select[name="DateOfBirthYear"] option').count();
  console.log(yearOptions);
  // toHaveCount verify all the options in the dropdown
  await expect(page.locator('select[name="DateOfBirthDay"] option')).toHaveCount(32);
  await expect(page.locator('select[name="DateOfBirthMonth"] option')).toHaveCount(13);
  await expect(page.locator('select[name="DateOfBirthYear"] option')).toHaveCount(112);  
});

