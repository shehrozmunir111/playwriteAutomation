import { test, expect } from '@playwright/test';

test.skip('HandleFrames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    // total number of frames
    const allFrames = await page.frames();
    console.log("Total number of frames: ",allFrames.length);

    //1) using name or url
    //const frame1 = await page.frame('name');
    //const frame2 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame2.fill("[name=mytext1]",'Hello');
    
    //2) using frame locator
    const frame3 = await page.frameLocator("frame[src='frame_1.html']").locator("[name=mytext1]");
    await frame3.fill("Hello");
})

test('HandleFrames: Inner Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    const frame4 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame4.fill("[name=mytext3]",'Hello');

    // nested frames
    const childFrame = await frame4.childFrames();
    await childFrame[0].locator("//*[@id='i6']/div[3]/div").check(); // childFrame[0] is the first child frame, childFrame[1] is the second child frame
})
