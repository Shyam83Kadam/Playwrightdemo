import {test,expect,Locator} from "@playwright/test"
test("Dynamic table",async({page})=>{
     await page.goto("https://practice.expandtesting.com/dynamic-table");
     const table=page.locator("table.table tbody");
     await expect(table).toBeVisible();

     // 1) select all the rows then find number of rows
     const rows=table.locator("tr");
     const rowcount:number=await rows.count();
     console.log("Total number rows",rowcount);

     // 2) for Chrome process get the value of cpu load
     for(let i=0;i<rowcount;i++){
        const input=await rows.nth(i).locator("td").nth(0).innerText();
        if(input==="Chrome"){
            const cpu=await rows.nth(i).locator("td").nth(2).innerText();
            console.log("Chrope cpu",cpu);
        }
        console.log(input);
     }
     await page.waitForTimeout(5000);
});