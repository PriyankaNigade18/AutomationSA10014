/*
Tags applicable for suite as well as for test cases
it.only
it.skip

describle.only
describe.skip
*/

describe("This is suite for Tags",()=>{


it("Test case for Google",()=>{

    cy.visit("https://www.google.com");

})


it("Test case for amazon",()=>{

    cy.visit("https://www.amazon.in");
    
})

it("Test case for CRm",()=>{

    cy.visit("https://automationplayground.com/crm");
    
})

})

//suite2
describe.only("This is suite2",()=>{

    it.only("Test case for Cypress docs",()=>{

    cy.visit("https://docs.cypress.io/app/tooling/IDE-integration");
    
})
})