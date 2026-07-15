import{test,expect,Locator,chromium,firefox} from "@playwright/test"

test("Browser context demo",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    // creating 1 page
    const parentpage=await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");
    /* these statements should go parallely
    context.waitForEvent('page');
    parentpage.locator("button[onclick='myFunction()']").click();*/
    const [childpage]=await Promise.all([context.waitForEvent('page'), parentpage.locator("button[onclick='myFunction()']").
    click()]);
    // Approach 1- switch between pages and get title
    const pages=context.pages(); // returns an array
    console.log("Array",pages);
    console.log("Number of pages", pages.length);
    console.log("Title of the parent page",await pages[0].title());
    console.log("Title of the parent page",await pages[1].title());
    // Approach 2
    console.log("Title of the parent page",await parentpage.title());
    console.log("Title of the parent page",await childpage.title());
});