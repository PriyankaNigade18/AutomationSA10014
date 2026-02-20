/*
1.To open any application
------------------------
cy.visit(url);

2.To get the title
---------------------
cy.title()

3.To get the current url
-----------------------
cy.url()


*/

describe("This is for launch application and test it",()=>{

it("This is for google application launch",()=>{

    cy.visit("https://www.google.com/");
    cy.log("Google application launch");

    //get the title and to print it cypress use cypress variable concepts
    let appTitle=cy.title();
    cy.log("Application title is: "+appTitle);//Application title is: [object Object]

    //get the url and print
    let appUrl=cy.url();
    cy.log("Application url is: "+appUrl);//Application url is: [object Object]

})





})