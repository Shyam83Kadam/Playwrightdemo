import { test, expect, Locator,Page} from "@playwright/test";
test.beforeEach(async({page})=>{
 await page.goto("https://automationpracticehubapp.netlify.app/#normal-link");
  await page.locator("input[id='login-username']").fill("Admin");
  await page.locator("input[id='login-password']").fill("Hello@123");
  await page.locator("button[class='login-submit']").click();
})
 test("Hover",async({page})=>{
  await page.locator("div[data-testid='hover-area']").hover();
 });  
test("Double click",async({page})=>{
  await page.locator("button[id='double-click-btn']").dblclick();
  const doubleclkmsg=page.locator("p[id='double-click-message']");
  await (expect(doubleclkmsg)).toContainText("Double click detected successfully!");
 });  
test("Right click",async({page})=>{
  await page.locator("div[id='right-click-area']").click({button:"right"});
  const copyButton=page.locator("button[id='context-menu-copy']");
  await expect(copyButton).toBeVisible();
 });  