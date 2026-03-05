/*
What is WebElement?
------------------------
Any UI Element from application we called it as webelement(textbox,button,link,dd...etc)

How to Automate any webelement?
--------------------------------
First identify webelement and then perform action on webelement

To identify WebElement we need Locators
Locator is address of webelement form webapplication/page

Playwright support 3 locators strategy
=====================================
1.BuiltIn Locator
2.cssSelector
3.Xpath

CssSelector
===================
-CssSelector is Locator will identify elements based on CssProperty
-CssSelector is faster that xpath as it can travel in one direction
(parent node--->child node)

1.tagname with id
------------------
Synatx:
---------------
tagname#id

example:
<a id="SignIn"

a#SignIn or #SignIn

2.tagname with attribute
--------------------------
Syntax
------------
tagname[attribute='value']

3.tagname with className
------------------
Syntax:
----------
tagname.className

Examples
==============
<button class="btn btn-default btn-primary"/>
                1      2         3
button.btn.btn-default.btn-primary......1 of 1

button.btn


*(contains() in string ),^(startswith prefix),$(endswith suffix)=
----------------------------------------------------------------
1 .*
============
tagname[attribute*='partial value']

2.^
======================
tagname[attribute^='prefix value']


3. $
======================
tagname[attribute$='suffix value']

any parent to child
==========================

parentele childele : direct + indirect child
aside a ------1 of 13 element
or

parentele>childEle : direct child element
div.list-group>a------1 of 13 element

indexing
================
parentele>childele:nth-child(domindex)
div.list-group>a:nth-child(4)
or 
Superparenttag>parent:nth-child(index)>childtag
ul.dropdown-menu-right>li:nth-child(5)>a


In Playwright if you are using cssSelector or xpath then use locator()
page.locator()
*/

import {test,expect} from "@playwright/test"

test("Test for CssSelectors",async({page})=>{

    //open application
    await page.goto("https://www.saucedemo.com/");

    //enter username with tagname with id
    await page.locator("#user-name").fill("standard_user");

    //enter password with tagname with attribute
    await page.locator("input[type='password']").fill("secret_sauce");

    //click on Login button with tagname with className
    await page.locator("input.submit-button").click();

    //navigate to next page-Assertion

    await expect(page).toHaveURL(/inventory/);
    console.log("User navigated to Inventory Page!");
    

    await page.waitForTimeout(2000);



})











