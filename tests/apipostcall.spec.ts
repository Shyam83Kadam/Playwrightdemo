import {test,expect} from '@playwright/test';

test('Test post api',async ({request})=>{
    const accessToken: string = "1b0dd70f56603908262098f5dc3fbf5f018d6e02160633a5480aec4f99b43ea6";
    const response = await request.post("https://simple-books-api.click/orders",{headers:{Authorization: `Bearer ${accessToken}`},data:{bookId: "3",
    "customerName": "Shyam11"}});
    console.log(response.status());
    //await expect(response).toBeOK();
    const responseBody = await response.json();
    console.log(responseBody);
    const orderid= responseBody.orderId;
    console.log(orderid);
    console.log(response.headers());
    // console.log(await response.body());
});