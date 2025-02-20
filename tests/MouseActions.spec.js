import { test, expect } from '@playwright/test';

test.skip('Mouse Actions: Hover Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // mouse hover on the button
    await page.locator('.dropbtn').hover();
    // verify the Laptop text is visible
    await expect(page.locator('//a[normalize-space()="Laptops"]')).toBeVisible();
    await page.locator('//a[normalize-space()="Laptops"]').hover();
    });

test.skip('Mouse Actions: Right Click Test', async ({ page }) => {
        await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        // mouse right click on the button
        await page.locator('.context-menu-one.btn.btn-neutral').click({ button: 'right' });
        // verify the text
        await expect(page.locator('//span[normalize-space()="Edit"]')).toBeVisible();
});

test.skip('Mouse Actions: Double Click Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // mouse double click on the button
    await page.locator('//button[normalize-space()="Copy Text"]').dblclick();
    // verify the text from the input field
    await expect(page.locator('#field2')).toHaveValue('Hello World!');
    });

test('Mouse Actions: Drag and Drop Test', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
    
        //1) Approach 1: Using dragTo() method
        // drag and drop the button
        await page.locator('#draggable').dragTo(page.locator('#droppable'));
        // verify the text
        await expect(page.locator('#droppable')).toHaveText('Dropped!');

        // refresh the page
        await page.reload();

        //2) Approach 2: Dragging manually
        // drag and drop the button
        await page.locator('#draggable').hover();
        await page.mouse.down();
        await page.locator('#droppable').hover();
        await page.mouse.up();
        // verify the text
        await expect(page.locator('#droppable')).toHaveText('Dropped!');
    });