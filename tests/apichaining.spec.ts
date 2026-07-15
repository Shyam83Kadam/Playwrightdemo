import {test,expect} from '@playwright/test';
test("API chaining",async({request})=>{
    const baseurl="https://simple-books-api.click";

     // Step 1: Get Access Token

    const tokenresponse=await request.post(`${baseurl}/api-clients/`,
         {headers:{"content-type":"application/json"},
         data:{"clientName": "Shyam6","clientEmail": "shyam6@gmail.com"}});
         const token=await tokenresponse.json();
         const accessToken=token.accessToken;
         console.log(accessToken);

         // Step 2: Create Order

    const orderresponse=await
         request.post(`${baseurl}/orders`,{headers:{Authorization: `Bearer ${accessToken}`},data:{bookId: "1",
        "customerName": "Shyam6"}});
        const order=await orderresponse.json();
        const orderid=order.orderId;
        console.log(orderid);

        // Step 3: Get Order details

    const orderdetailsresponse=await request.get(`${baseurl}/orders/${orderid}`,{headers:{Authorization: `Bearer ${accessToken}`}});
        const orderdetails=await orderdetailsresponse.json();
        console.log(orderdetails);

         // Step 4: Update Order

         const updateorder=await request.patch(`${baseurl}/orders/${orderid}`,{headers:{Authorization: `Bearer ${accessToken}`},data:{
        "customerName": "Ashwini"}});

        // Step 5: Delete Order
        const deleteorder=await request.delete(`${baseurl}/orders/${orderid}`,{headers:{Authorization: `Bearer ${accessToken}`}});
        expect(deleteorder).toBeOK();
});