

import {test,expect} from "@playwright/test"


test("Test for file upload",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/upload");

await page.locator("#file-upload").setInputFiles("tests/TestFiles/API Basics .pdf");

//upload
await page.locator("#file-submit").click();

let messageEle=page.locator("//h3");

await expect(messageEle).toHaveText("File Uploaded!");

await page.waitForTimeout(2000);



})

