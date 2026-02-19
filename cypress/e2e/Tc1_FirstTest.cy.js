/*
1.Create spec file(filename.cy.js)-->2.create suite(describe())==>3.Create test case(it())
*/

/// <reference types="Cypress" />

describe("This is suite 1",()=>{

it("This is testcase1",()=>{

    cy.log("This is test case1......");
    //to open any application cy.visit()
    cy.visit("https://www.google.com");

})

it("This is testcase2",()=>{
    cy.log("This is testcase2.....");
    cy.visit("https://www.amazon.in");
})



})