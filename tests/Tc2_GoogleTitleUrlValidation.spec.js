/*
To open application
-------------------------
page.goto(url);

To get the title of current page
--------------------------------
page.title()

To get the current url of page
-----------------------------------
page.url()

*/

import {test,expect} from "@playwright/test"

test("Test for Google title and Url validation",async({page})=>{


    //open application
    await page.goto("https://www.google.com/");

    //get the title of page
    let appTitle=await page.title();
    console.log("Application title is: "+appTitle);
    

    //to get the url of current page
    let appUrl=page.url();
    console.log("Application url is: "+appUrl);

    //assertions on variable: Js method toEqual() toContain()
    expect(appTitle).toEqual("Google");//full match

  
    expect(appUrl).toEqual("https://www.google.com/");//full match

    //partial match
    expect(appUrl).toContain("google.com")//partial match


    //page level assertions:expect():Hard assertions
    await expect(page).toHaveTitle("Google");//full match
    console.log("Title matched!");

    //assert current url
    await expect(page).toHaveURL("https://www.google.com/");//full match
    console.log("Url matched!");
    
    //partial match on url: using regular expression: for pattern matching :/partial text/
    await expect(page).toHaveURL(/google.com/);
    console.log("Url matched!");

})