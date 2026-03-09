
/*
Playwright will automatically dismiss the alerts

In playwright we have 4 methods
--------------------------------
1.Ok button: accept()
2.cancel button: dismiss()
3.To get the text of alert: message()
4.To get the type of alert: type()
5.To automate prompt alert : accept(prompt)
*/

import {test,expect} from "@playwright/test"


test("Test for Simple alert",async({page})=>{

//manually trigger alert and handle it
    page.on('dialog',async(alertBox)=>{

        console.log("Type of alert is: "+alertBox.type());
        console.log("Alert text is: "+alertBox.message());

        //ok
        await alertBox.accept();
        

    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.getByText("Click for JS Alert").click();
    //alert will open and autodismissed by playwright

    //assert
    let resultEle=page.locator("#result");
    await expect(resultEle).toHaveText("You successfully clicked an alert");
    console.log("Alert handled!");

    await page.waitForTimeout(2000);
    
})



test("Test for confirmation alert",async({page})=>{

    page.on('dialog',async(alertBox)=>{

        console.log("Type of alert is: "+alertBox.type());
        console.log("Alert text is: "+alertBox.message());

        //cancel
        await alertBox.dismiss();
        

    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.getByText("Click for JS Confirm").click();
    //playwright will auto dissmiss this confirmation alert by clicking on Cancel button


//assert
    let resultEle=page.locator("#result");
    await expect(resultEle).toHaveText("You clicked: Cancel");
    console.log("Alert handled!");

    await page.waitForTimeout(2000);

})


test.only("Test for Prompt alert",async({page})=>{

    page.on('dialog',async(alertBox)=>{

        console.log("Type of alert is: "+alertBox.type());
        console.log("Alert text is: "+alertBox.message());

        //prompt
        await alertBox.accept("Hi");
        

    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.getByText("Click for JS Prompt").click();
    


//assert
    let resultEle=page.locator("#result");
    await expect(resultEle).toHaveText("You entered: Hi");
    console.log("Alert handled!");

    await page.waitForTimeout(2000);

})




