/*
Hooks are usefull to set precodintions and postconditions for our test cases

*/



describe("Test for Hooks",()=>{
    before(()=>{
        cy.log("Before hook will be executed only once before all test cases")
    })

    after(()=>{
        cy.log("After hook will be executed only once after all test cases")
    })

    beforeEach(()=>{
        cy.log("BeforeEach hook will be executed before every test case")
        //open application
    cy.visit("https://automationplayground.com/crm/");

        //signIn
    cy.contains("Sign In").should("be.visible").click();
    })
    
    afterEach(()=>{
        cy.log("AfterEach hook will be executed after every test case");

        //get the url and print it
        cy.url().then((appUrl)=>{
            cy.log("Application url is: "+appUrl)
        })
    })
    
it("Test for Signin link validation",()=>{

    // //open application
    // cy.visit("https://automationplayground.com/crm/");


    // cy.contains("Sign In").should("be.visible").click();

    //assertion
    cy.url().should("include","login");
    cy.log("User is navigated to login page!")
})

it("Test for user login validation",()=>{
    
    // cy.visit("https://automationplayground.com/crm/");

    // cy.contains("Sign In").click();

    //email
    cy.get("#email-id").type("test2525@gmail.com");

    //password
    cy.get("#password").type("test123");

    //submit
    cy.get("#submit-id").click();

    //assertion
    cy.url().should("include","customers");
    cy.log("User completed login");


})

it("Test for Signout link validation",()=>{
    
// cy.visit("https://automationplayground.com/crm/");

//     cy.contains("Sign In").click();

    //email
    cy.get("#email-id").type("test2525@gmail.com");

    //password
    cy.get("#password").type("test123");

    //submit
    cy.get("#submit-id").click();

    cy.contains("Sign Out").should("be.visible").click();

    cy.get("p").should("have.text","Thank you for using the CRM. See you next time!");



})








})