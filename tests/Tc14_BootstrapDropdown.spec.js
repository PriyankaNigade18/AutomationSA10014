
import {test,expect} from "@playwright/test"

test("Test for Bootsrap dropdown/Autosuggestion dropdown",async({page})=>{

await page.goto("https://www.redbus.in/");

await page.locator("#srcinput").fill("Pune");

await page.waitForTimeout(1500);

let allOptions=await page.locator("//div[contains(@class,'listItem')]//div[contains(@class,'listHeader')]").all();
console.log("Total Options are: "+allOptions.length);

for(let i of allOptions)
{
    console.log(await i.innerText());
    if((await i.innerText()).includes("Viman Nagar, Pune"))
    {
        //click
        await i.click();
        break;
    }
    
}





await page.waitForTimeout(2000);

})