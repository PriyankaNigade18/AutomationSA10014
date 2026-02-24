/*
Assertion
--------------
Assertion will always help you to validate certain/current state of application

Cypress supoort two types of assertion
------------------------------------
1.Implicit assertion(default)
----------------------
should()
and()

2.Explicit Assertion(Need Cypress variable)
-------------------------------------------
1.assert(): TDD
2.expect(): BDD

*/


describe("Test for Assertion",()=>{

it("Test for Implicit assertion using should() and() ",()=>{
   
    
//open application
cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

//title assertion
cy.title().should("eq","Account Login");//full match

//url assertion
cy.url().should("include","login");//partial match

//test for h2 tag have this Returning Customer text
cy.get("h2").eq(1).should("have.text","Returning Customer");

//email id should be visible
cy.get("#input-email").should("be.visible");

//email id should be enable
cy.get("#input-email").should("be.enabled");

//type email

cy.get("#input-email").type("test2525@gmail.com");

//asert the valid value
cy.get("#input-email").should("have.value","test2525@gmail.com");

//assert invalid value
//cy.get("#input-email").should("have.value","test2626@gmail.com")


//and(): is applicable for multiple assertions and use only with should()

cy.get("#input-email").should("be.visible").and("be.enabled").clear().type("Testing").and("have.value","Testing")

//13 options
cy.get("div.list-group>a").should("have.length",13);


})


it.only("Test for Explicit Assertion",()=>{
    //open application
cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

cy.get("#input-email").type("test2525@gmail.com");

//Explicit asertion we need cypress variable

cy.get("#input-email").then(($ele)=>{

    //get the written value :val()
    let value=$ele.val();

    //BDD-expect()
    expect(value).eq("test2525@gmail.com");

    //TDD-assert()
    assert.equal(value,"test2525@gmail.com")
})


})



})


/*Assignemnt:
Goto https://the-internet.herokuapp.com/checkboxes and assert checkboxes
first checkbox should be unchecked
second checkbox should be checked
*/

