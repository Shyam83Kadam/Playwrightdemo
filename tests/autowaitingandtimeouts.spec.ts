import {test,expect,Locator} from "@playwright/test";
test("Autowaiting",async({page})=>{
    // This timeout is for this test only
    test.setTimeout(60000); // 60 seconds
    //test.slow(); // 90 sec (default is 30 sec)
    await page.goto("https://demowebshop.tricentis.com/");

    // Assertions- auto wait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:20000});// This is for assertion
    await expect.soft(page.locator("input[class='search-box-text ui-autocomplete-input']")).toBeVisible({timeout:20000});

    //Actions- auto wait works
    // It will not wait for actionability check
    await page.locator("input[class='search-box-text ui-autocomplete-input']").fill("Laptop",{force:true});
    await page.locator("input[class='button-1 search-box-button']").click({force:true}); // force action 
    // It will skip the actionability checks
});