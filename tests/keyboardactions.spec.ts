import {test,expect} from "@playwright/test";
test("Keyboard actions 1",async({page})=>{
    await page.goto("https://text-compare.com/");
    page.locator(("textarea[name='text1']")).fill("Hello sansa");
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Control+c");
    //await page.keyboard.press("Control+z");
    //await page.keyboard.press("Control+x");
    page.locator(("textarea[name='text2']")).click();
    await page.keyboard.press("Control+v");
});
test("Keyboard actions 2",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const searcharea=page.locator(("input[class='search-box-text ui-autocomplete-input']"));
    await searcharea.fill("Laptop");
    await searcharea.press("Enter");
});
   