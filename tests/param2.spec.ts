import { test } from '@playwright/test';
const searchData = [
    "Laptop",
    "Mobile",
    "Shoes"
];
for (const product of searchData) {
    test(`Search product: ${product}`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("#small-searchterms").fill(product);
        await page.locator(".search-box-button").click();
    });
}