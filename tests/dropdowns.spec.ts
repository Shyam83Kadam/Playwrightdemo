import {test,expect} from "@playwright/test";
test.beforeEach(async({page})=>{
 await page.goto("https://automationpracticehubapp.netlify.app/#normal-link");
  await page.locator("input[id='login-username']").fill("Admin");
  await page.locator("input[id='login-password']").fill("Hello@123");
  await page.locator("button[class='login-submit']").click();
})
test("Select country ",async({page})=>{
    const selectcountry=page.locator(("select[id='country-dropdown']")); 
    //selectcountry.selectOption("India");
    await selectcountry.selectOption({label:"India"});;
    //await selectcountry.selectOption({value:"USA"});
    //await selectcountry.selectOption({index:3});
});
test("Select skills",async({page})=>{
    await page.locator("div[class='multi-select-trigger']").click();
    await page.getByTestId("skill-option-javascript").click();
    await page.getByTestId("skill-option-typescript").click();  
    await page.getByTestId("skill-option-playwright").click();
    await page.getByTestId("skill-option-selenium").click();  
});
test("Searchable dropdown",async({page})=>{
    await page.locator("input[id='searchable-dropdown']").fill("fa");
    await page.getByTestId("search-option-fastify").click();
});
 