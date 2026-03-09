

import {test,expect} from "@playwright/test"


test("Test for Radio button automation",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");


    //click on first radio button
    await page.locator("//input[@type='radio']").first().click();

    await page.waitForTimeout(2000);
    //click on last radio button
    await page.locator("//input[@type='radio']").last().click();
    await page.waitForTimeout(2000);

    //nth(index)
await page.locator("//input[@type='radio']").nth(1).click();

await page.waitForTimeout(2000);

})

test.only("Test for Checkbox automation",async({page})=>{

    await page.goto("https://www.letskodeit.com/practice");


    await page.locator("//div[@id='checkbox-example-div']//input[@type='checkbox']").first().check();
    await page.locator("//div[@id='checkbox-example-div']//input[@type='checkbox']").nth(1).check();
    await page.locator("//div[@id='checkbox-example-div']//input[@type='checkbox']").last().check();


await page.waitForTimeout(2000);

})
