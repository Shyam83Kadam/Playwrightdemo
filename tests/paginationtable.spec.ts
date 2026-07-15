import { test } from "@playwright/test";

test("Pagination table", async ({ page }) => {
    let hasmorepages=true;

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    while (hasmorepages) {

        const rows = page.locator("#example tbody tr");
        const rowCount = await rows.count();

        // Print all rows on current page
        for (let i = 0; i < rowCount; i++) {
            console.log(await rows.nth(i).innerText());
        }
        // find next button
        const nextbtn=page.locator("button[aria-label='Next']");
        // check if next is disabled
        const classvalue=await nextbtn.getAttribute('class');
        if(classvalue?.includes("disabled")){
             hasmorepages=false;
             break;
              
        }else{ 
            await nextbtn.click();
        }
        
    }
});