import { test, expect, Locator,Page} from "@playwright/test";

let page!: Page;
test.beforeAll("Open app", async ({ browser }) => {
  // Open application
  page=await browser.newPage();
  await page.goto("https://demowebshop.tricentis.com/");
});
test.afterAll(async () => {
     await page.close();
});
test.beforeEach('Login',async()=>{
  await page.locator("a[class='ico-login']").click();
  await page.locator("input[class='email']").fill('shyamkadam7972@gmail.com');
  await page.locator("input[id='Password']").fill('Shyam@9923');
  await page.locator("input[class='button-1 login-button']").click();
})
test.afterEach("Logout", async () => {
   await page.locator("a[class='ico-logout']").click();
});

test("Add to cart", async () => {
    await page.locator("input[class='button-2 product-box-add-to-cart-button']").first().click();
});

test("Search", async () => {
    await page.locator("a[href='/search']").click();
});