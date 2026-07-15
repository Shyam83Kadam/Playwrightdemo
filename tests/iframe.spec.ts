import {test,expect,Locator} from "@playwright/test"
test("frames1",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    // Total no. of frames present on the page
    const frames=page.frames();
    console.log("Number of frames ",frames.length);

    // Using page.frame
    const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
    await frame1?.locator("input[name='mytext1']").fill("Frame1");

    await page.waitForTimeout(5000);
});
// Child frame
test("iframes", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Total number of frames
    const frames = page.frames();
    console.log("Number of frames:", frames.length);

    // Get Frame 3
    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
    console.log(frame3?.url()); // returns url of frame3

    await frame3?.locator("input[name='mytext3']").fill("Frame3");

    // Child frames
    if(frame3){
         const childFrames = frame3.childFrames(); // childFrames() returns an array of nested frames inside frame3.
         console.log("Child frames:", childFrames?.length); // Prints how many child frames are inside Frame 3.
    const child=childFrames[0].getByLabel("i am a human"); // Get the first child iframe.
    child.check(); // This attempts to check a checkbox or radio button.
    }
    await page.waitForTimeout(5000);
});
// framelocator
 test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    // Total no. of frames present on the page
    const frames=page.frames();
    console.log("Number of frames ",frames.length);

    // Using page.frame
    const frame2=page.frameLocator("frame[src='frame_2.html']");
    if(frame2){
        await frame2.locator("input[name='mytext2']").fill("Frame2");
    }else{
        console.log("Frame is not available");
    }

    await page.waitForTimeout(5000);
});

 