

/*
first():interact with first element 
last(): interact with last element
eq(index): this will match as per index element

*/
describe("Test for checkbox and radio button automation",()=>{


it("Test for Checkbox and radiobutton",()=>{

    //open application
    cy.visit("https://formy-project.herokuapp.com/form");

    cy.wait(2000);

   // cy.get("#radio-button-1").click();

    cy.get("input[type='radio']").first().click();

    cy.get("input[type='radio']").last().click();

    //here use array indexing
    cy.get("input[type='radio']").eq(1).click();

    //checkboxes

    cy.get("input[type='checkbox']").first().check();

    cy.get("input[type='checkbox']").eq(1).check();

    cy.get("input[type='checkbox']").last().check();



})

})