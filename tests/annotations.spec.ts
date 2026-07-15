import { test, expect, Locator } from "@playwright/test";

test('test1', async ({page}) => {
    console.log("This is test1");
});

test.skip('test2', async ({page}) => {
    console.log("This is test2");
});
test('test3', async ({page}) => {
    test.slow();
    console.log("This is test3");
});
test.fixme('test4', async ({page}) => {
    console.log("This is test4");
});
test('test5', async ({page}) => {
    test.skip()
    console.log("This is test5");
});
test('test6', async ({page}) => {
    console.log("This is test6");
});
test("Mobile Test", async ({ page, browserName }) => {
    test.skip(browserName === "firefox", "Not supported on Firefox");
    await page.goto("https://demowebshop.tricentis.com/search");
});