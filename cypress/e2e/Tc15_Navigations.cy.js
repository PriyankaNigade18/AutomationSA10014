
describe("Test for Navigation",()=>{

it("Test for Navigation refresh,back and forward",()=>{



cy.visit("https://www.amazon.in/");

//get the home page title and print it
cy.title().then((appTitle)=>{
cy.log("Homepage title: "+appTitle);
})
cy.wait(1500);
//mobile page
cy.contains("Mobiles").click();
//get the home page title and print it
cy.title().then((appTitle)=>{
cy.log("MobilePage title: "+appTitle);
})

//assertion
cy.title().should("include","Phones");
cy.log("User navigated to mobile page!");
cy.wait(1500);

//back()
cy.go("back");

cy.wait(1500);
//assertion on homepage
cy.title().should("include","Online");
cy.log("User Navigated to Home page!");

cy.wait(1500);
cy.go("forward");
//assertion
cy.title().should("include","Phones");
cy.log("User navigated to mobile page!");

cy.wait(1500);

//refresh mobile page
cy.reload();



})


})