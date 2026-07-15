import{test,expect,Locator} from "@playwright/test"
test("Date picker1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const date1:Locator=page.locator("input[id='datepicker']");
    await expect(date1).toBeVisible();
    // 1) using fill method
    //await date1.fill("02/06/1997");
    // 2) using date picker
    await date1.click();
    const year='2013';
    const month='July';
    const date='3';

    while(true){
        const currentmonth=await page.locator("span.ui-datepicker-month").textContent();
        const currentyear=await page.locator("span.ui-datepicker-year").textContent();
        if(currentmonth===month && currentyear===year){
            break;
        }
        // future date
        //await page.locator(".ui-datepicker-next").click();
        // previous date
        await page.locator(".ui-datepicker-prev").click();
    }
        const alldates= await page.locator("table.ui-datepicker-calendar td").all();
        for(let dt of alldates){
            const datetext=await dt.innerText();
            if(datetext === date){
               await dt.click();
               break;
            }
        }
        await page.waitForTimeout(5000);
})