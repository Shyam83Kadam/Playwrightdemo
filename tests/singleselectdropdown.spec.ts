import {test,expect,Locator} from "@playwright/test";
test("Text input actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Approach 1 visible text
    //await page.locator("#country").selectOption('india');

    // Approach 2 Value attribute
    //await page.locator("#country").selectOption({value:'uk'});

    // Approach 3 label
    //await page.locator("#country").selectOption({label:'uk'});

    // Approach 4 index
    //await page.locator("#country").selectOption({index:4});

    // check no. of options in the dropdown (count)

    const dropdownoptions:Locator=page.locator("#country option");
    console.log(dropdownoptions.count());
    await expect(dropdownoptions).toHaveCount(10);

    // check an option is present in the dropdown
    const optionstext:string[]= (await (dropdownoptions.allTextContents())).map(text=>text.trim());
    console.log(optionstext);
    expect(optionstext).toContain('Japan');
    // Printing options from dropdown
    for(const option of optionstext){
        console.log(option);
    }
    await page.waitForTimeout(3000);
});

test("Multiselect dropdown",async({page})=>{
    page.goto("");
    // Using visible text
    page.locator("#colors").selectOption(['Red','Blue','Yellow']);
    
})