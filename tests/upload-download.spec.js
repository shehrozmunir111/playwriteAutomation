const ExcelJS = require('exceljs');
const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs').promises;

// exceljs object
const workbook = new ExcelJS.Workbook();

async function writeExcel(searchValue, replaceValue, change, filePath) {
    // read file
    await workbook.xlsx.readFile(filePath);
    // get worksheet
    const worksheet = workbook.getWorksheet('Sheet1');
    // read file
    const output = await readFile(worksheet, searchValue);

    // replace the price value
    const cell = worksheet.getCell(output.row, output.column + change.columnChange);
    cell.value = replaceValue;
    console.log(`Price updated for ${searchValue} to ${replaceValue} at Row: ${output.row}, Column: ${output.column + change.columnChange}`);
    // save the worksheet
    await workbook.xlsx.writeFile(filePath);
}

async function readFile(worksheet, searchValue) {
    // output object to store the row and column number
    let output = { row: -1, column: -1 };
    // iterate over rows
    worksheet.eachRow((row, rowNumber) => {
        // iterate over cells
        row.eachCell((cell, columnNumber) => {
            // if the cell value is Apple, print the row number and column number
            if (cell.value === searchValue) {
                output.row = rowNumber;
                output.column = columnNumber;
                console.log(`${searchValue} found at Row: ${output.row}, Column: ${output.column}`);
            }
        });
    });
    return output;
}

//writeExcel('Apple', 350, { rowChange: 0, columnChange: 2 }, 'exceldownloadtest.xlsx');

test('upload and download excel file', async ({ page }) => {
    const textSearch = 'Mango';
    const updatedPrice = '350';
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    
    // wait for the file to download
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;
    
    // Define the path where we want to save the file in our project
    const projectFilePath = path.join(__dirname, 'downloads', 'download.xlsx');
    
    // Ensure the downloads directory exists
    await fs.mkdir(path.join(__dirname, 'downloads'), { recursive: true });
    
    // Save the file to our project directory
    await download.saveAs(projectFilePath);
    console.log('File saved to:', projectFilePath);

    // Update Mango's price from 299 to 350 (column D is 3 columns after column A, so columnChange is 2)
    await writeExcel('Mango', updatedPrice, { rowChange: 0, columnChange: 2 }, projectFilePath);
    
    await page.locator('#fileinput').click();
    // if the type is file, then use the setInputFiles method otherwise not work
    await page.locator("#fileinput").setInputFiles(projectFilePath);

    // Wait for file processing and table data to appear
    await page.waitForTimeout(3000); // Give time for file processing

    // Wait for the Mango row to be visible and get its price cell
    const mangoRow = page.locator('#row-0');
    await expect(mangoRow).toBeVisible({ timeout: 5000 });
    
    // Get the price cell within the Mango row using the role and column ID
    const priceCell = mangoRow.getByRole('cell').filter({ hasAttribute: 'data-column-id', hasText: updatedPrice });
    await expect(priceCell).toBeVisible();
    
    // Get the price value and verify it
    const price = await priceCell.textContent();
    console.log('Price:', price);
    expect(price.trim(), `Price (${price}) does not match expected value (${updatedPrice})`).toBe(updatedPrice);

    console.log('Verification complete: Price was successfully updated and verified in the uploaded file');
});
