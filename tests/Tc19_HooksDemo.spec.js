

import {test,expect} from "@playwright/test"

test.describe.serial("This is google application suite",()=>{

//global variable
let page;

    test.beforeEach(async({context})=>{

        page=await context.newPage();

        await page.goto("https://www.google.com");
        await page.waitForTimeout(1000);
    })

test("Test for Google title",async({})=>{

    //get the title
    let appTitle=await page.title();
    console.log("Application title is: "+appTitle);
await page.waitForTimeout(2000);
})



test("Test for Google search",async({})=>{

    await page.locator("#APjFqb").fill("Playwright");

    await page.waitForTimeout(2000);
})
})