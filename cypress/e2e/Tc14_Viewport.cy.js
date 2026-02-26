

describe("Test for Viewport for browser size simulation",()=>{

    it("Test for viewport",()=>{

        cy.visit("https://automationplayground.com/crm/");

        cy.viewport(560,536);

        cy.wait(2000);

        //maximum 1920,1080
        cy.viewport(1920,1080);

         cy.wait(2000);

        //minimize 100,100
        cy.viewport(100,100);

        cy.wait(2000);

        //mobile view
        cy.viewport("iphone-x");


    })
})