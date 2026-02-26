
describe("Test for All types of Alerts",()=>{


    it("Test for Simple Alert with Ok button",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        /*
        Cypress always automatically handle alert by clicking on Ok button
        */
       //open alert
       cy.get("button").first().click();//alert box will open

//event
cy.on("window:alert",(alt1)=>{

    //assertion
    expect(alt1).equal("I am a JS Alert");
})

       //assert
       cy.get("#result").should("have.text","You successfully clicked an alert");


    })

})