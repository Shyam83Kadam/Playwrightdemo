import { test, expect, Locator } from "@playwright/test";
test('test5 @smoke',async()=>{
    console.log("This is test5");
});
test('test6',{tag:['@sanity','@regression','@smoke']},async()=>{
    console.log("This is test5");
});
test.describe('Group1',{tag:['@sanity','@regression']}, () => {
    test("test1", async ({ page }) => {
        console.log("This is test 1");
    });
    test("test2", async ({ page }) => {
        console.log("This is test 2");
    });
});
test.describe('Group2',{tag:'@regression'}, () => {
    test("test3", async ({ page }) => {
        console.log("This is test 3");
    });
    test("test4", async ({ page }) => {
        console.log("This is test 4");
    });
});
 