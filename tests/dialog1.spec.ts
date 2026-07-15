import {test,expect,Locator} from "@playwright/test"
test("dialogs handle",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Enable alert handling
    page.on('dialog',(dialog)=>{
        console.log("dialog type is",dialog.type()); // returns dialog type
        expect(dialog.type()).toContain('confirm');
        console.log("dialog message is",dialog.message()); // returns message of dialog
        expect(dialog.message()).toContain('Press a button!');
        //dialog.accept();
        dialog.dismiss();
    })
    await page.locator("button[id='confirmBtn']").click();
    const text=await page.locator("p[id='demo']").innerText();
    console.log(text);
    await page.waitForTimeout(5000);
});