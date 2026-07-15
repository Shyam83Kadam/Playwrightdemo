import {test,expect,Locator} from "@playwright/test"
test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Enable alert handling
    page.on('dialog',(dialog)=>{
        console.log("dialog type is",dialog.type()); // returns dialog type
        expect(dialog.type()).toContain('prompt');
        console.log("dialog message is",dialog.message()); // returns message of dialog
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept("john"); // pass the text to prompt alert
        //dialog.dismiss();
    })
    await page.locator("button[id='promptBtn']").click();
    const text=await page.locator("p[id='demo']").innerText();
    console.log(text);
    await page.waitForTimeout(5000);
});


 