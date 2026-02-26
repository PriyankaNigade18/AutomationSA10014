/*
- find() we can use only with get()
- find() get all the decendent nodes

*/


describe("Test for find()",()=>{


it("Test for Decendent nodes",()=>{

    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

    //cy.get("div.list-group>a").each(($ele)=>{

        cy.get("div.list-group").find("a").each(($ele)=>{

            cy.log("Text is: "+$ele.text());
        })

        
    
})


})