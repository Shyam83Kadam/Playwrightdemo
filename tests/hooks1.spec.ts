import { test, expect, Locator } from "@playwright/test";

test.beforeAll('beforeall', async () => {
    console.log("This is before all");
});

test.afterAll('afterall', async () => {
    console.log("This is after all");
});

test.beforeEach('beforeeach', async ({ page }) => {
    console.log("This is before each");
});

test.afterEach('aftereach', async ({ page }) => {
    console.log("This is after each");
});

test.describe('Group1', () => {

    test("test1", async ({ page }) => {
        console.log("This is test 1");
    });

    test("test2", async ({ page }) => {
        console.log("This is test 2");
    });

});

test.describe('Group2', () => {

    test("test3", async ({ page }) => {
        console.log("This is test 3");
    });

    test("test4", async ({ page }) => {
        console.log("This is test 4");
    });

});