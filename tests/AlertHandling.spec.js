import { test, expect } from '@playwright/test';

test.skip('Alert with Ok', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Enable dialog window handler
  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  });

  await page.click("#alertBtn");
  
});

test.skip('Confirmation Dialog-Alert with Ok and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable dialog window handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).toContain('confirm');
      expect(dialog.message()).toContain('Press a button!');
      await dialog.accept(); // close by using ok button
      //await dialog.dismiss(); // close by using cancel button
    });
  
    await page.click("//button[@id='confirmBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    
  });


  test('Prompt Dialog-Alert with Ok and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable dialog window handler
    page.on('dialog', async dialog => {
      expect(dialog.type()).toContain('prompt');
      expect(dialog.message()).toContain('Please enter your name:');
      expect(dialog.defaultValue()).toContain('Harry Potter');
      await dialog.accept('John'); // close by using ok button
      //await dialog.dismiss(); // close by using cancel button
    });
  
    await page.click("//button[@id='promptBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    
  });