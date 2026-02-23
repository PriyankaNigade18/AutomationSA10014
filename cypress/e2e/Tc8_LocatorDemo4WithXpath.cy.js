/*
What is xpath
====================
path of webelement from html/xml documnets
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




*/

describe("Test app for xpath",()=>{


    it("Test opencart login feature",()=>{

        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

        //Error Syntax error, unrecognized expression: //input[@name='email']
       // cy.get("//input[@name='email']").type("test2525@gmail.com");

        cy.xpath("//input[@name='email']").type("test2525@gmail.com");

        cy.xpath("//input[@id='input-password']").type("test123");

        cy.xpath("//input[@type='submit']").click();
        




    })
})




