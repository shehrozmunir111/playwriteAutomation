import { test, expect } from '@playwright/test';

test('WebTable Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // total number of columns and rows
    const table = await page.locator('#productTable');

    const columns = await table.locator('thead tr th');
    console.log(`Total columns:`, await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log(`Total rows:`, await rows.count());
    expect(await rows.count()).toBe(5);

    // select the checkbox for the Smartwatch
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    const checkbox = await matchedRows.locator('input');
    await checkbox.check();
    // verify the checkbox is selected
    await expect(checkbox).toBeChecked();

    // unselect the checkbox for the Smartwatch
    await checkbox.uncheck();
    // verify the checkbox is not selected
    await expect(checkbox).not.toBeChecked();

    // select multiple products by reusable function
    await selectProduct(rows, page, 'Smartwatch');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Wireless Earbuds');

    // unselect multiple products by reusable function
    await unselectProduct(rows, page, 'Smartwatch');
    await unselectProduct(rows, page, 'Tablet');
    await unselectProduct(rows, page, 'Wireless Earbuds');

    // print all product names using loop
    for (let i = 0; i < await rows.count(); i++) {
        // get the row
        const row = await rows.nth(i);
        // get the tds
        const tds = await row.locator('td');
        // -1 because the last td is the checkbox
        for (let j = 0; j < await tds.count()-1; j++) {
            // get the cell
            const cell = await tds.nth(j);
            // get the text
            const text = await cell.textContent();
            // print the text
            console.log(text);
        }
    }

    // read the data from all the pages in the table
    const pages = await page.locator('.pagination li a');
    const pageCount = await pages.count();
    console.log(`Total pages:`, pageCount);
    for (let i = 0; i < pageCount; i++) {
        if (i > 0) {
            // click the page
            await pages.nth(i).click();
            // wait for the table to load
            await page.waitForTimeout(1000);
        }
        // read the data from the table
        await readTableData(rows, page);
    }

})

async function selectProduct(rows, page, productName) {
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    const checkbox = await matchedRows.locator('input');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}

async function unselectProduct(rows, page, productName) {
    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    const checkbox = await matchedRows.locator('input');
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}

async function readTableData(rows, page) {
    for (let i = 0; i < await rows.count(); i++) {
        const row = await rows.nth(i);
        const tds = await row.locator('td');
        for (let j = 0; j < await tds.count()-1; j++) {
            const cell = await tds.nth(j);
            const text = await cell.textContent();
            console.log(text);
        }
    }
}