/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test,expect} from "@playwright/test"


test("Test for BuiltIn locators",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/");

//getByRole(): link: click on SignIn
//await page.getByRole("link",{name:"Sign In"}).click();

//getByText():link: click on SignIn
await page.getByText("Sign In").click();

//enter email Id with getByPlaceholder()
await page.getByPlaceholder("Enter email").fill("test@gmail.com");

//enter password with getByPlaceholder()
await page.getByPlaceholder("Password").fill("test123");

//check the checkbos with getByLabel()
await page.getByLabel("Remember me").check();

//click on Submit button with getByRole()
await page.getByRole("button",{name:"Submit"}).click();

//assertion on url
await expect(page).toHaveURL(/customers/);
console.log("User navigated to customers page..!");

//from next page get the element text: textContent() or innerText()

let headingText1=await page.getByRole("heading",{name:"Our Happy Customers"}).textContent();
console.log("Text is: "+headingText1);


let headingText2=await page.getByRole("heading",{name:"Our Happy Customers"}).innerText();
console.log("Text is: "+headingText2);


await page.waitForTimeout(2000);


})

test("Test for getByAltText() and getByTitle()",async({page})=>{

    await page.goto("https://www.google.com/");

    //for google logo lets highlight with getByAltText()
    await page.getByAltText("ICC Men's T20 World Cup: Semi-Finals").highlight();

    //search for kwyword with getByTitle():title="Search"
    await page.getByTitle("Search").fill("Java");


    await page.waitForTimeout(2000);

})

test.only("Test for getByTestId()",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //data-testid="nav-home"
     await page.waitForTimeout(2000);

    await page.getByTestId("nav-home").click();

    await page.waitForTimeout(2000);
})