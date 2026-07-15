import {test,expect,Locator} from "@playwright/test";
test("Comparing methods",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const products:Locator=page.locator("h2.product-title");

    // 1) innertext & textcontent

    //console.log(await products.nth(1).innerText());
    //console.log(await products.nth(5).textContent());

    //const count=await products.count();

   /* for(let i=0;i<count;i++){
        // innertext() method Extracts plain text eliminates whitespaces and line breaks
        //const productname:string=await products.nth(i).innerText();
        //console.log(productname);

         // textContent() method Extracts text including hidden elements and line breaks
        const productname:string | null=await products.nth(i).textContent();
        console.log(productname?.trim());
    }*/

    /*console.log("*****************allInnerText vs allTextContents************");
    // 2) allInnerText vs allTextContent
    //const productnames:string[]=await products.allInnerTexts();
    const productnames:string[]=await products.allTextContents();
    const productnamestrimmed:string[]=productnames.map(text=>text.trim());
    console.log("Product names after trim",productnamestrimmed);*/

    // 3) all() it will converts locators into locator type of array
    const locators:Locator[]=await products.all();
    console.log(locators);
    //console.log(await locators[1].innerText());
    for(let locate of locators){
        console.log(await locate.innerText());
    }
});