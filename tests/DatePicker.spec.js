import { test, expect } from '@playwright/test';

test('Date Picker Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // click on the date picker button and fill the date
    await page.fill('#datepicker', '02/12/2025');
    await expect(page.locator('#datepicker')).toHaveValue('02/12/2025');

    // Remove the date from the date picker
    await page.locator('#datepicker').fill('');
    await expect(page.locator('#datepicker')).toHaveValue('');

    // select the date from the date picker by using the date picker for next year
    const year = '2025';
    const month = 'February';
    const day = '12';
    await page.locator('#datepicker').click(); // click on the date picker
    // select the year and month
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if (currentYear === year && currentMonth === month) {
            break;
        }
        await page.locator('[title="Next"]').click(); // click on the next button
    }
    // select the day
    const dates = await page.$$("//a[@class='ui-state-default']");
    for (const dt of dates) {
        if (await dt.textContent() === day) {
            await dt.click();
            break;
        }
    }
    await expect(page.locator('#datepicker')).toHaveValue('02/12/2025');

    // unselect the date
    await page.locator('#datepicker').fill('');
    await expect(page.locator('#datepicker')).toHaveValue('');

    // select the date from the date picker by using the date picker for previous year
    const year1 = '2024';
    const month1 = 'January';
    const day1 = '12';
    await page.locator('#datepicker').click(); // click on the date picker
    // select the year and month
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if (currentYear === year1 && currentMonth === month1) {
            break;
        }
        await page.locator('[title="Prev"]').click(); // click on the previous button
    }
    // select the day
    const dates1 = await page.$$("//a[@class='ui-state-default']");
    for (const dt of dates1) {
        if (await dt.textContent() === day1 ) {
            await dt.click();
            break;
        }
    }
    await expect(page.locator('#datepicker')).toHaveValue('01/12/2024');

    // unselect the date
    await page.locator('#datepicker').fill('');
    await expect(page.locator('#datepicker')).toHaveValue('');

});
