import {test,expect} from "@playwright/test"

test("Test for Google title and Url validation",async({page})=>{


    //open application
    await page.goto("https://www.freshworks.com/");
    await page.waitForTimeout(2000);


    await page.screenshot({path:"tests/screenshots/freshworkspage.png"});

    //full page
        await page.screenshot({path:"tests/screenshots/freshworksFullpage.png",fullPage:true});




})