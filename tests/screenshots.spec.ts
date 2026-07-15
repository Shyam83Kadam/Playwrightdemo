import {test,expect,Locator} from "@playwright/test";
test("Screenshots demo",async({page})=>{
      await page.goto("https://demowebshop.tricentis.com/"); 
      const timestamp=Date.now();
      // page screenshot
      await page.screenshot({path:'Screenshots/'+'homepage'+timestamp+'.png'});
      //full page screenshot
      await page.screenshot({path:'Screenshots/'+'fullpage'+timestamp+'.png', fullPage:true});

      // Element screenshot
      const giftcard=page.locator("img[alt='Picture of $25 Virtual Gift Card']");
      await giftcard.screenshot({path:'Screenshots/'+'giftcard'+timestamp+'.png'});
});
test.only("Screenshots from config",async({page})=>{
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('shyamkadam7972@gmail.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password:' }).fill('S');
  await page.getByRole('textbox', { name: 'Password:' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password:' }).fill('Shyam@992');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});
  