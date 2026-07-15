import {test,expect,Locator} from "@playwright/test";
test("Verify css locatros",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForLoadState("domcontentloaded");
    // Using tag and id (tag#id)
    const searchbox:Locator=page.locator("input#small-searchterms");
    await searchbox.fill("Health Book");
    // Using tag and class (tag.class)
    const searchbtn:Locator=page.locator("input.button-1.search-box-button");
    await searchbtn.click();
});