/*
Assertion
================
Assertion help to validate current state of application
Playwright support two types of assertion
--------------------
1.Hard assertion
2.Soft assertion

HardAssertion
==================
When we apply assertion and if assertion fail then hard assertion will stop 
the execution and you will see assertion error
-by default its hard assertion
expect()

SoftAssertion
-================
When we apply assertion and if assertion fail then soft assertion will not stop 
the execution and it will continue execution with assertion error

expect.soft()


*/

import {test,expect} from "@playwright/test"


test("Test For hard assertion",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //title validation
    await expect(page).toHaveTitle("Account Login");
    console.log("Application title is: "+await page.title());
    
    //url validation
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    await expect(page).toHaveURL(/login/);
    console.log("Application url is: "+page.url());
    

    //elements test
    let emailEle=page.locator("#input-email");

    //should be visible
    await expect(emailEle).toBeVisible();

    //should be enabled
    await expect(emailEle).toBeEnabled();

    //should be editable
    await expect(emailEle).toBeEditable();

//based on conditions
    if(await emailEle.isVisible() && await emailEle.isEditable())
    {
        await emailEle.fill("test@gmail.com");
    }

//assert the value which is entered into element

await expect(emailEle).toHaveValue("test@gmail.com");

await page.waitForTimeout(2000);

})

test.only("Test For Soft assertion",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //title validation
    await expect.soft(page).toHaveTitle("Account Login");
    console.log("Application title is: "+await page.title());
    
    //url validation
    await expect.soft(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login");
    await expect.soft(page).toHaveURL(/login123/);
    console.log("Application url is: "+page.url());
    

    //elements test
    let emailEle=page.locator("#input-email");

    //should be visible
    await expect.soft(emailEle).toBeVisible();

    //should be enabled
    await expect.soft(emailEle).toBeEnabled();

    //should be editable
    await expect.soft(emailEle).toBeEditable();

//based on conditions
    if(await emailEle.isVisible() && await emailEle.isEditable())
    {
        await emailEle.fill("test@gmail.com");
    }

//assert the value which is entered into element

await expect.soft(emailEle).toHaveValue("test@gmail.com");

await page.waitForTimeout(2000);

})


