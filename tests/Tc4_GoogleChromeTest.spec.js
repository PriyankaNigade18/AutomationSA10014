
import {test,expect,chromium} from "@playwright/test"
/*
If you wanted to test application on branded browser like chrome/edge
then first from playwright configuration comment default browser setup(projects array)
*/
test("Test for Chrome launch",async({})=>{


    //Returns the browser instance.
    const browser=await chromium.launch({headless:false,channel:"chrome"});

    let page=await browser.newPage();

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    await page.waitForTimeout(2000);



})

