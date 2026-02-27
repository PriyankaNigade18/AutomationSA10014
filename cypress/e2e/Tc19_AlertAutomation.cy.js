
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


it("Test Confirmation alert",()=>{

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.contains("Click for JS Confirm").click();


    //assert
    // cy.get("#result").should("have.text","You clicked: Ok");
    // cy.log("Cypress automatically handled alert!");

    //auto dismiss alert(to click on cancel button)
    cy.on("window:confirm",()=>false);

    cy.get("#result").should("have.text","You clicked: Cancel");
     cy.log("Cypress automatically handled alert by click cancel button!");

})



it.only("Test for Prompt alert",()=>{

 cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

 //before openinig prompt alert take control of that window and pass text 
 cy.window().then((win)=>{

    cy.stub(win,"prompt").returns("Hello All");
 })

 //open alert 
 cy.contains("Click for JS Prompt").click();

 //assert

cy.get("#result").should("have.text","You entered: Hello All");
})
})