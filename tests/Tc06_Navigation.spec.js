

import {test,expect} from "@playwright/test"

test("Test for Navigation commands",async({page})=>{

//open application
await page.goto("https://www.google.com");

//get the title and print it inside console
console.log("Application title is: "+ await page.title());

//open facebook in same tab
await page.goto("https://www.facebook.com");

//get the title and print it inside console
console.log("Application title is: "+ await page.title());

//go back to google
await page.goBack();

await page.waitForTimeout(2000);
//come forward to facebook
await page.goForward();
await page.waitForTimeout(2000);

//refresh the webpage
await page.reload();

//static wait
await page.waitForTimeout(2000);
})