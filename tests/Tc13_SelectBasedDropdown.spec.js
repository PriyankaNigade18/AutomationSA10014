
import {test,expect} from "@playwright/test"

test("Test for Select tag based dropdown",async({page})=>{

//open application
await page.goto("https://www.amazon.in/");

//identify locator for dropdown then apply method:selectOption()
//1.visible text
await page.locator("#searchDropdownBox").selectOption("Amazon Pharmacy");
await page.waitForTimeout(2000);
//2.select by label
await page.locator("#searchDropdownBox").selectOption({label:"Computers & Accessories"});
await page.waitForTimeout(2000);
//3.select by value
await page.locator("#searchDropdownBox").selectOption({value:"search-alias=gift-cards"});
await page.waitForTimeout(2000);
//4.selet by index
await page.locator("#searchDropdownBox").selectOption({index:4});

await page.waitForTimeout(2000);
})