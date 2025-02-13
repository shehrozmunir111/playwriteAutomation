import { test, expect } from '@playwright/test';

test('File Upload: Upload a single file', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // click on the 'Choose File' button
    await page.locator("#singleFileInput").setInputFiles("tests/uploadFiles/testfile1.pdf");
    // click on the 'Upload Single File' button
    await page.locator("form[id='singleFileForm'] button[type='submit']").click();
    // verify the file is uploaded
    await expect(page.locator("#singleFileStatus")).toContainText("testfile1.pdf");
});

test.only('File Upload: Upload multiple files', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // click on the 'Choose Files' button
    await page.locator("#multipleFilesInput").setInputFiles(['tests/uploadFiles/testfile1.pdf', 'tests/uploadFiles/testfile2.pdf']);
    // click on the 'Upload Multiple Files' button
    await page.locator("//button[normalize-space()='Upload Multiple Files']").click();
    // verify the files are uploaded
    const text = await page.locator('#multipleFilesStatus').textContent();
    console.log(text);  // Log the content to see its structure
    expect(text).toContain('testfile1.pdf');
    expect(text).toContain('testfile2.pdf');
});

