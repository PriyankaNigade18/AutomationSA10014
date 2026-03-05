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