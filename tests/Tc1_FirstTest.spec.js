
//import playwright library
import {test,expect} from "@playwright/test"

test("This is test for Google application",async({page})=>{

    console.log("This is first test case");

    //open application
    await page.goto("https://www.google.com");

    
    
})

