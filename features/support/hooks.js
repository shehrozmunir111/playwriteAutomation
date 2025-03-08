const { chromium } = require('@playwright/test');
const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');

Before(async function() {
    // Launch browser with consistent settings
    this.browser = await chromium.launch({
        headless: false,
        timeout: 30000
    });
    
    // Create isolated context
    this.context = await this.browser.newContext();
    
    // Create new page and POM
    this.page = await this.context.newPage();
    this.poManager = new POManager(this.page);
});

After(async function() {
    // Graceful cleanup with error handling
    const cleanup = async (resource, name) => {
        try {
            if (resource) await resource.close();
        } catch (error) {
            console.error(`Error closing ${name}:`, error);
        }
    };

    await cleanup(this.page, 'page');
    await cleanup(this.context, 'context');
    await cleanup(this.browser, 'browser');
});

BeforeStep(async function() {
    
});

AfterStep(async function(result) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot.png' });
    }
});