import {test,expect,Locator} from "@playwright/test"
test("dialogs handle",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Enable alert handling
    page.on('dialog',(dialog)=>{
        console.log("dialog type is",dialog.type()); // returns dialog type
        expect(dialog.type()).toContain('alert');
        console.log("dialog message is",dialog.message()); // returns message of dialog
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
    })
    await page.locator("button[id='alertBtn']").click();
    await page.waitForTimeout(5000);
});