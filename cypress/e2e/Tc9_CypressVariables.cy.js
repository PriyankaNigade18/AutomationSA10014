
/*
To automate single / multiple elements even for title/ url print we use cypress variable

Note:
For single webelement automation and title,url use then()
For Multiple webElement automation use each()

Syntax:
To get the title and print it 
===============================
cy.title().then((variableName)=>{
    cy.log("Application title: "+variableName)
    })

Syntax:
To get the url and print it in console
===========================================

cy.url().then((variableName)=>{
    cy.log("Application url is: "+variableName)
    })

    Syntax
    For Single WebElement to get its visible text or to perform any action 
    ======================
    Note:
    - We are storing element address so use $ sign to strore variable
    - To perform action first use wrap($variable) then perform action,click,type...
    - To get the text of element use text() like getText() in selenium


    cy.get("locator").then(($variableName)=>{

        //To get the text
        $variableName.text();

        //To perform  click 
        cy.wrap($variableName).click();

        //To perform type
        cy.wrap($variableName).type("text");

        })


*/

describe("Test for Cypress variable",()=>{


it("Test for Title,url,element with variable",()=>{

cy.visit("https://www.google.com/");


// let appTitle=cy.title();
// cy.log("Application title: "+appTitle);

//To get the title and store it into variable and print it inside console
cy.title().then((appTitle)=>{//here appTitle is variable which contains current page title

    cy.log("Application title is: "+appTitle);
})


//To get the url and print inside console
cy.url().then((appUrl)=>{//here appUrl is variable name which contains url of current page
    cy.log("Application url is: "+appUrl);

})


//enter text in search box with variable
//cy.get("#APjFqb").type("Jenkins");

cy.get("#APjFqb").then(($searchEle)=>{//here searchEle is variable name

    cy.wrap($searchEle).click()

    cy.wrap($searchEle).type("cypress");
})


})

})