
describe("Test Orangehrm",()=>{

    it("Test login and logout",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.wait(5000);

        cy.get("input[name='username']").type("Admin");

        cy.get("input[type='password']").type("admin123");

        cy.get("button.oxd-button").click();

        //add assertion on navigation to next page
        cy.url().should("include","dashboard");

        cy.log("Application Navigated to dashboard page....");

        cy.wait(5000);
        //to open menu
        cy.get("i.oxd-userdropdown-icon").click();

        //click on Logout
        cy.get("ul.oxd-dropdown-menu>li:nth-child(4)>a").click();

    })
})