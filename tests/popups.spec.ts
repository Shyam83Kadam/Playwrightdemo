import {test,expect,Locator} from "@playwright/test";
test("Popups",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    //page.waitForEvent('popup');
    //await page.locator("#PopUp").click();
    const [popup]=await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()]);
    const pages=context.pages(); // return array of pages
    console.log("Number of pages",pages.length);
    console.log(pages[0].url());
    console.log(pages[1].url());
    await popup.locator("a[href='/downloads']").click();
    await popup.waitForTimeout(5000);
    await popup.close();
    await page.waitForTimeout(5000);
});