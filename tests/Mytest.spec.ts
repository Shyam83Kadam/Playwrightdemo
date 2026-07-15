import {test,expect} from "@playwright/test";

// Fixture- global variable : page, browser
test("Verify page title",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let Title:string=await page.title();
    console.log("Title is ",Title);
    await expect(page).toHaveTitle("Automation Testing Practice");
})