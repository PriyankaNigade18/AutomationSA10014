/*
What is WebElement?
------------------------
Any UI Element from application we called it as webelement(textbox,button,link,dd...etc)

How to Automate any webelement?
--------------------------------
First identify webelement and then perform action on webelement

To identify WebElement we need Locators
Locator is address of webelement form webapplication/page

Cypress support 3 locators
==============================
1.contains()
--------------
Contains() will help to identify any element based on its visible text

syntax
===========
cy.contains("visible text");

2.tagName
----------------
-Number of links
-Number of images
-Number of Input boxes

<a> 
Syntax
=============
cy.get("tagname");

3.CssSelector
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


*/

describe("Test for Cypress Locators",()=>{

it("Test for CRM login and Logout functaionality",()=>{

//open application
cy.visit("https://automationplayground.com/crm/");

//click on Sign In link with contains()
//cy.contains("Sign In").click();

//click on SignIn link using id/ cssSelector
cy.get("a#SignIn").click();


//after click app navigated to next login page lets validate it
cy.url().should("include","login.html");


//login
//enter email id with id locator from cssSelector
cy.get("#email-id").type("test123@gmail.com");

//enter password with tagname with attribute from cssSElector
cy.get("input[placeholder='Password']").type("test123");

//checkbox automation
//cy.get("#remember").click();

cy.get("#remember").check();//check the checbox

//static wait like Thread.sleep in Selenium
cy.wait(2000);//2sec wait

cy.get("#remember").uncheck();//uncheck the checkbox

//click on Submit with classname from cssSelector
cy.get("button.btn").click();

//page navigated to customers page lets apply assertion
cy.url().should("include","customers");


//signout
cy.contains("Sign Out").click();

})


it.only("Test for Special Syntax in CssSelector",()=>{

    //open application
cy.visit("https://www.amazon.in/");

cy.wait(2000);
 
cy.screenshot("AmazonHomePage");

//search with CssSelector * partial match)
cy.get("input[id*='searcht']").type("Mobile");

//clear the search result with ^starts with from cssSelector

cy.get("input[id^='twotab']").clear();


//search for bags with $ endswith from CssSelector
cy.get("input[id$='box']").type("bags");

})





})





