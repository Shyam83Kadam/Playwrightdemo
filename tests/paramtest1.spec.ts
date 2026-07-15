import { expect, test } from "@playwright/test";
const searchdata: string[] = ["laptop", "14", "14.1-inch"];
for (const text of searchdata) {
    test(`Verify product contains "${text}"`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("#small-searchterms").fill("laptop");
        await page.locator(".search-box-button").click();
        const product = page.locator("a[href='/141-inch-laptop']").nth(1);
        await expect(product).toContainText(text, { ignoreCase: true });
    });
}