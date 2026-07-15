import {test,expect,Locator} from "@playwright/test"
test("Static table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator=page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // 1) count no. of rows in table
    const rows:Locator=page.locator("table[name='BookTable'] tbody tr");
    await expect(rows).toHaveCount(7);
    const rowcount:number=await rows.count();

    console.log("Total number of rows ",rowcount);
    expect(rowcount).toBe(7);
     
    // 2) count no. of columns in table
    //const columns:Locator=page.locator("table[name='BookTable'] tbody tr th");
    const columns:Locator=rows.locator("th");
    await expect(columns).toHaveCount(4);
    const columncount:number=await columns.count();
    console.log("Total number of columns ",columncount);
    expect(columncount).toBe(4);

    //3)  Read all data from second row

    const secondrowcells:Locator=rows.nth(2).locator("td");
    console.log(await secondrowcells.allInnerTexts());

    //4) Read specific data
    const specificdata:Locator=page.locator("table[name='BookTable'] tbody tr:nth-child(2) td:nth-child(1)");
    console.log(await specificdata.textContent());

    // 5) Read all data from table (Excluding first row)
    console.log("*********Printing all data*******")
    const allrowdata=await rows.all(); // returns array of locators
    for(let row of allrowdata.slice(1) )// skip the header row
    {
       const cols=await row.locator("td").allInnerTexts();
       console.log(cols.join('\t'));
    }

    //6) Print book names where author is mukesh
    console.log("******Books written by mukesh********");
    const mukeshbooks:string[]=[];
    for(let row of allrowdata.slice(1) )// skip the header row
    {
       const cells=await row.locator("td").allInnerTexts();
       const author=cells[1];
       const book=cells[0];
       if(author==='Mukesh'){
        console.log(`${author} \t ${book}`);
        mukeshbooks.push(book);
       }
    }
    expect(mukeshbooks).toHaveLength(2);
    // 70) Calculate total price
    let totalprice:number=0;
    for(let row of allrowdata.slice(1)){
        const cells=await row.locator("td").allInnerTexts();
        const price=cells[3];
        totalprice=totalprice+parseInt(price);
    }
    console.log(totalprice);
  
});