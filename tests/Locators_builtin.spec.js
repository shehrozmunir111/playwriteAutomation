/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import { test, expect } from '@playwright/test';

test('Locators Built-in', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // getByAltText
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible(); // Verify if the logo is visible

    // Verify the placeholder of the username field by getByPlaceholder 
    const username = await page.getByPlaceholder('Username');
    await expect(username).toHaveAttribute('placeholder', 'Username');

    // Verify the placeholder of the password field by getByPlaceholder
    const password = await page.getByPlaceholder('Password');
    await expect(password).toHaveAttribute('placeholder', 'Password');
    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // Verify the text of the login button by getByRole
    await page.getByRole('button', { type: 'submit' }).click();

    // Verify the text by getByText
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(page.getByText(name)).toBeVisible();

    await page.close();

});
