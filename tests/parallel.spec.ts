import {test,expect,Locator} from "@playwright/test";
test.describe.configure({mode:'parallel'});
    test("test1",async({page})=>{
    console.log("This is test 1");
});
test("test2",async({page})=>{
    console.log("This is test 2");
});

    test("test3",async({page})=>{
    console.log("This is test 3");
});
test("test4",async({page})=>{
    console.log("This is test 4");
});
 test.describe('Group',async()=>{
    test("test5",async({page})=>{
    console.log("This is test 5");
});
test("test6",async({page})=>{
    console.log("This is test 6");
});
});


 