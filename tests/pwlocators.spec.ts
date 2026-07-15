/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).*/

import { test, expect, Locator } from "@playwright/test";
test("Verify playwright locators", async ({ page }) => {
    await page.goto("https://www.flipkart.com/", {
        waitUntil: "domcontentloaded",
        timeout: 60000});
    const logo: Locator = page.locator('img[src*="d2ecfddf891a3922"]');
    await expect(logo).toBeVisible();
   const text:Locator=page.getByText("Fashion");
   expect (text.click);
});
test("Get by text", async ({ page }) => {
  await page.goto("https://www.flipkart.com/", {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });
  await page.getByRole('link', { name: 'Contact Us' }).click();
});
test("Search box", async ({ page }) => {
  await page.goto("https://www.flipkart.com/", {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });
const search = page.getByRole('textbox', {
  name: 'Search for Products, Brands and More'});
await search.fill("iphone");
});
