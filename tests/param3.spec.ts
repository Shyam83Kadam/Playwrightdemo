import { test, expect, Locator,Page} from "@playwright/test";
//import fs from 'fs';
import data from "../testdata/jsondata.json";
for(const login of data){
 test(`param3 with ${login.email}`,async({page})=>{
  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator("a[class='ico-login']").click();
  await page.locator("input[class='email']").fill(login.email);
  await page.locator("input[id='Password']").fill(login.password);
  await page.locator("input[class='button-1 login-button']").click();
 });  
}
