import {test,expect} from '@playwright/test';

test('Test get token',async ({request})=>{
    // generate api token
    const response = await request.post("https://simple-books-api.click/api-clients/",{headers:{"content-type":"application/json"},data:{"clientName": "Shyam",
   "clientEmail": "ashu@gmail.com"}});
    console.log(response.status());
    await expect(response).toBeOK()
    console.log(await response.json());
    console.log(response.headers());
    // console.log(await response.body());
});