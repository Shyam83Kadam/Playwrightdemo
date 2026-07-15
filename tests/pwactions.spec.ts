import {test,expect,Locator} from "@playwright/test";
test("Text input actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name:Locator=page.locator("input#name");
    await expect(name).toBeVisible();
    const maxlength:string|null=await name.getAttribute("maxlength"); // Returns maxlength attribute
    expect(maxlength).toBe("15");
    await name.fill("John f cannedy");
    console.log("Input value of the first name is",await name.inputValue()); // Returns input value of name
    await page.waitForTimeout(3000);
});
test("Radio button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleradio:Locator=page.locator("input#male");
    await expect(maleradio).toBeVisible();
    await expect(maleradio).toBeEnabled();
    expect(await maleradio.isChecked()).toBe(false);
    await maleradio.check(); //select the radio button

    await page.waitForTimeout(3000);
});
// select all checkboxes approach 1
/*test.only("Checkbox actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxes:Locator=page.locator('input.form-check-input[type="checkbox"]');
    const count = await checkboxes.count();
    console.log("Checkboxes count is ",count);
    for(let i=0;i<count;i++){
        await checkboxes.nth(i).check();
    }
    await page.waitForTimeout(3000);
});*/
test.only("Select check boxes",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Select single check box
    const Mcheckbox:Locator=page.getByLabel('Monday');
    await Mcheckbox.check();
    await expect(Mcheckbox).toBeChecked();

    // Select all check boxes
     const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));
     expect(checkboxes.length).toBe(7);
     for(const checkbox of checkboxes){
        checkbox.check();
        await expect(checkbox).toBeChecked();
     }
});