/*
Dropdown
=================
1.dropdown with select tag
2.Bootstrapdropdown/autosuggestion dropdown

*/

describe("Test for Dropdown automation",()=>{

it("Test for Select tag based dropdown",()=>{

cy.visit("https://formy-project.herokuapp.com/form");

//Select an <option> with specific text, value, or index within a <select>.
cy.get("#select-menu").select("10+");//visible text

cy.wait(2000);

//select with index
cy.get("#select-menu").select(3);
cy.wait(2000);

//select with value
cy.get("#select-menu").select("1");

})


it.only("Test for bootstrap dropdown",()=>{
    cy.visit("https://www.goibibo.com/flights/");

    cy.viewport(1920,1080);
//close the popup
cy.get("span.icClose").click();

//from
cy.get("#fromCity").click({force:true});
cy.get("input[placeholder='From']").type("pune",{force:true});

cy.get("ul[role='listbox']>li p.revampedCityName").each(($option)=>{

    let optionText=$option.text();
    cy.log($option.text());

    if(optionText.includes("Chhatrapati Shivaji International Airport"))
    {
        //click on that option
        cy.wrap($option).click({force:true});
    }

})


})
})