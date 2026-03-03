
/*
Fixture in playwright it is environment details
Playwright support in Built 4 fixture
1.browser: open default playwright brower(Chromium,Webkit,firefox)
2.Context: Context is used for Role specific application( copy of main browser/incoginito window)
3.page: page is tab in browser
4.request: used in api test

*/


import {test,expect, chromium} from "@playwright/test"

//browser-->context-->page-->app
test("Test for Browser fixture",async({browser})=>{

    //for browser open new context
    //newContext=Creates a new browser context. It won't share cookies/cache with other browser contexts.
    let context1=await browser.newContext();

    //from context1 open new tap(page)
    //newPage():Creates a new page in the browser context.
    let page=await context1.newPage();

    await page.goto("https://www.amazon.in");



    //static wait
    await page.waitForTimeout(2000);
})

//context-->page--->application(role specific application)
test("Test for context fixture",async({context})=>{


    //from new context open page(tab1)
    let page1=await context.newPage();

    //from same context open one more page(tab2)
   let page2=await context.newPage();

   await page1.goto("https://www.google.com");

   await page2.goto("https://www.facebook.com");

   await page2.waitForTimeout(3000);

   //close context manually
   await page2.close();

})

test("Test for page fixture",async({page})=>{

    await page.goto("https://www.amazon.in");

    await page.waitForTimeout(2000);

})


//open chrome browser
test("Test for Chrome launch",async({})=>{


    //Returns the browser instance.
    const browser=await chromium.launch({headless:false,channel:"chrome"});

    let page=await browser.newPage();

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    await page.waitForTimeout(2000);



})



//api testing
test.only("Test for request fixture",async({request})=>{

    let response=await request.get("https://api.restful-api.dev/objects/7");
    console.log(response);
    console.log("Status code is: "+response.status());
    
    
})









