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

describe("Test Opencart with cssSelector",()=>{


it("Test Login and Logout Feature",()=>{

//open application
cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

//email
cy.get("#input-email").type("test2525@gmail.com");


//password
cy.get("#input-password").type("test123");

//login button
cy.get("input[value='Login']").click();

//click on arrow
cy.get("span.caret").click();

//click on Logout with contains()
//cy.contains("Logout").click();

//click on logout with cssSelector using indexing
cy.get("ul.dropdown-menu-right>li:nth-child(5)>a").click();


//get the text and print
cy.get("div#content>h1").then(($ele)=>{

   let textOfEle=$ele.text();
   cy.log("Success message is: "+textOfEle);
})

})


})