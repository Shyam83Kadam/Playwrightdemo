import {test,expect} from '@playwright/test';

test('Test get order',async ({request})=>{
    const accessToken: string = "1b0dd70f56603908262098f5dc3fbf5f018d6e02160633a5480aec4f99b43ea6";
    const orderid: string = "Wz-anQGIqzoSqrzaCz_J8";
    const response = await request.get(`https://simple-books-api.click/orders/${orderid}`,{headers:{Authorization: `Bearer ${accessToken}`}});
    console.log(await response.json());
    console.log(response.headers());
    //console.log(await response.body());
});
 