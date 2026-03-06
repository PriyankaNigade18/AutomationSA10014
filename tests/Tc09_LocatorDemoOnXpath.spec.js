/*
What is xpath
====================
path of webelement from html/xml documents
Xpath identify elements directly from DOM
xpath can travel in both direction parent to child and viceversa

Types of xpath
==============
1.Absolute xpath
---------------------
- It identify elment from root node
- It start with '/'

/html/body/div[2]/div/div/div/div[2]/div/form/div[1]/input

2.Relative xpath
-----------------------
- It identify element from its relative property
- It starts with '//'

//*[@id='input-email']

Syntax:
============
//tagname[@attributeName='value']

---------------------------------------------------------
xpath with indexing or position()
=====================================
Syntax
================
(xpath)[index]

OR

(xpath)[position()=index]

---------------------------------------------------------
xpath with Methods
=========================
1.text():
---------------
- identify element based on its visible text and this method will never ignore white space
Syntax
=========
//tagname[text()='visible text']

2.normalize-space()
----------------------
- identify element based on its visible text and it ignore white space(trim() from String class)

Syntax:
=========
//tagname[normalize-space()='visible text']

3.contains()
-----------------
- identify element based on partial (attribute value/text) match
Syntax:
=========
//tagname[contains(@attribute,'partialvalue')]
OR
//tagname[contains(text(),'partialtext')]

4.starts-with()
-------------------------
- identify element based on prefix(attribute value/text) match
Syntax:
=========
//tagname[starts-with(@attribute,'prefixvalue')]
OR
//tagname[starts-with(text(),'prefixtext')]


*/


import {test,expect} from "@playwright/test"


test("Test for Login functionality with Basic Syntax of xpath",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

//enter email 
await page.locator("//input[@name='email']").fill("test2525@gmail.com");

//enter password
await page.locator("//input[@id='input-password']").fill("test123");

//click login button
await page.locator("//input[@value='Login']").click();

//assertion on title
await expect(page).toHaveTitle("My Account");
console.log("User navigated to My Account Page!");

//get the heading
let heading=await page.locator("(//h2)[1]").innerText();

console.log("Heading is: "+heading);


await page.waitForTimeout(2000);
})

test("Registration page automation with xpath indexing",async({page})=>{

//open application
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

//first name with indexing
await page.locator("(//input[@class='form-control'])[1]").fill("Kiran");

//lastname with indexing
await page.locator("(//input[@class='form-control'])[2]").fill("Sharma");

//dynamic email address
let email="kiran"+Date.now()+"@gmail.com";

//email with indexing
await page.locator("(//input[@class='form-control'])[3]").fill(email);

//telephone with position()
await page.locator("(//input[@class='form-control'])[position()=4]").fill("097987897");

//password
await page.locator("(//input[@class='form-control'])[position()=5]").fill("test123");

//confirmpassword
await page.locator("(//input[@class='form-control'])[position()=6]").fill("test123");

//click on yes radio button
await page.locator("(//input[@type='radio'])[2]").click();

//checkbox
await page.locator("//input[@name='agree']").check();

//click on continue
await page.locator("//input[@value='Continue']").click();


//get the text of success message
let resultText=await page.locator("(//h1)[2]").innerText();
console.log("Success message: "+resultText);

//assert the message
let ele=page.locator("(//h1)[2]");
await expect(ele).toHaveText("Your Account Has Been Created!");

await page.waitForTimeout(2000);

})


test.only("Test for Xpath Methods",async({page})=>{
//open application
await page.goto("https://www.amazon.in/");

//click on mobiles option:text()
await page.locator("//a[text()='Mobiles']").click();

//click on cart option:normalize-space()
await page.locator("(//span[normalize-space()='Cart'])[2]").click();

//get the cart message
let text=await page.locator("//h3[normalize-space()='Your Amazon Cart is empty']").innerText();
console.log("Cart message is: "+text);

//contains(): partial match to search for item

let searchEle=page.locator("//input[contains(@id,'tabsearch')]")
//enter watch
await searchEle.fill("watch");
//press enter key
await searchEle.press('Enter');

//starts-with():prefix value
let ele=page.locator("//input[starts-with(@id,'twotab')]");
//clear previous text:clear()
await ele.clear();

await page.waitForTimeout(1500);//wait for 1.5 sec

//search for bags
await ele.fill("bags");

//press enter key
await ele.press('Enter');

await page.waitForTimeout(2000);



})