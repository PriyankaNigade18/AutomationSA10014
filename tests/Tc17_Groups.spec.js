//create test suite: group

import {test,expect} from "@playwright/test"
import { describe } from "@playwright/test"


describe.serial("This is test suite",()=>{



test("Test case1",async({page})=>{
    await page.goto("https://www.google.com");
console.log("This is test case1");
await page.waitForTimeout(1000);

})

test("Test case2",async({page})=>{
     await page.goto("https://www.facebook.com");
console.log("This is test case2");
await page.waitForTimeout(1000);

})

test("Test case3",async({page})=>{
     await page.goto("https://www.amazon.com");
console.log("This is test case3");
await page.waitForTimeout(1000);
})




})