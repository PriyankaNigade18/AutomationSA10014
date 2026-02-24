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



describe("Validate google title and url",()=>{
    it("Test for Google valie title and url",()=>{

        //open application
        cy.visit("https://www.google.com/");

        //get the title and validate with Google
        //Asserts that the target is strictly (===) equal to the given val.
        cy.title().should("eq","Google");//exact match

        //get the url and validate with https://www.google.com/
        cy.url().should("eq","https://www.google.com/");//exact match

        //get the url  and vaildate only for google.com partial validation:include
        cy.url().should("include","google.com")


    })


    it.skip("Test for Orangehrm invalid title and url ",()=>{

        //open application
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //to get the title and validate with invalid title orangehrm(-ve scenario)
       // cy.title().should("eq","orangehrm");//AssertionError
                    //Timed out retrying after 4000ms: expected 'OrangeHRM' to equal 'orangehrm'


        //to get the url and validate invalid invalid
        cy.url().should("include","loginpage.php");//assertion error after 4sec
          cy.log("Title tested!") ;       
    })

    it("For Invalid title",()=>{
        cy.visit("https://www.google.com")

        //for invalid title assertion
        cy.title().should("eq","GoogleApp");
    })




})