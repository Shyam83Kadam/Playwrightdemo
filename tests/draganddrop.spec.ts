import{test,expect,Locator} from "@playwright/test"
test("Drag and drop 1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dragelement=page.locator("div[id='draggable']");
    const dropelement=page.locator("div[id='droppable']");
    await dragelement.dragTo(dropelement);
});
test("Drag and drop 2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dragelement=page.locator("div[id='draggable']");
    const dropelement=page.locator("div[id='droppable']");
    await dragelement.hover();
    await page.mouse.down();
    await dropelement.hover();
    await page.mouse.up();
});