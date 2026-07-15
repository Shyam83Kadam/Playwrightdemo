import {test,expect} from '@playwright/test';

test('Test get api',async ({request})=>{
    const response = await request.get("https://simple-books-api.click/books");
    await expect(response).toBeOK();
    console.log(await response.json());
    console.log(response.headers());
    //console.log(await response.body());
});