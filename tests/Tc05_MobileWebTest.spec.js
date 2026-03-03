
import {test,expect} from "@playwright/test"


/*
To run application on mobile browser goto playwright configuration file 
and uncomment the mobile viewport and comment other browser
*/

test("Test for Mobile browser",async({page})=>{

   await page.goto("https://www.saucedemo.com/");

   await page.waitForTimeout(4000);

})