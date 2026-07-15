import{test,expect,Locator,chromium,firefox} from "@playwright/test"
// Browser --> context > pages
// browser --> chromium,firefox and webkit
// context --> we can have multiple contexts for multiple users/apps for the same browser
// page    --> new tab, window, popup 
test("Browser context demo",async({})=>{
    const browser=await firefox.launch();
    const context1=await browser.newContext();
    const context2=await browser.newContext();
    const page1=await context1.newPage();
    const page2=await context1.newPage();
    const page3=await context2.newPage();
    const page4=await context2.newPage();
    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://ui.vision/demo/webtest/frames/");
    await page3.goto("https://testautomationpractice.blogspot.com/");
    await page4.goto("https://ui.vision/demo/webtest/frames/");
})