

import {test,expect} from "@playwright/test"


test("Test for Footerlinks ",async({page})=>{

    //open application
    await page.goto("https://www.freshworks.com/");

    //get the footer links
    //all():When the locator points to a list of elements, this returns an array of locators, 
    let allLinks=await page.locator("//div[contains(@class,'eNMhGa')]//ul//li//a").all();
    console.log("Total Footer links are: "+allLinks.length);//27

    for(let i of allLinks)
    {
        console.log(await i.innerText());
        
    }
    
})

test("Google search scenario",async({page})=>{

//open application
await page.goto("https://www.google.com/");


//search for valid keyword
await page.locator("#APjFqb").fill("Jenkins");

//wait
await page.waitForTimeout(1500);

let allOptions=await page.locator("//ul[@role='listbox']//li").all();
console.log("Total options are: "+allOptions.length);

for(let i of allOptions)
{
    console.log(await i.innerText());
    
}

await page.waitForTimeout(2000);

})

test.only("Test for Multiple options",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    let allOptions=await page.locator("//div[@class='list-group']//a").all();
    

    for(let i of allOptions)
    {
        console.log(await i.innerText());
        if((await i.innerText()).includes("Forgotten Password"))
        {
            console.log("Option found!");
            await i.click();
            break;
        }
        
    }
    
    
await page.waitForTimeout(2000);

})