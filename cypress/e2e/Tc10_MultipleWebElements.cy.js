/*
To automate single / multiple elements even for title/ url print we use cypress variable

Note:
For single webelement automation and title,url use then()
For Multiple webElement automation use each()

Syntax:
To get the title and print it 
===============================
cy.title().then((variableName)=>{
    cy.log("Application title: "+variableName)
    })

Syntax:
To get the url and print it in console
===========================================

cy.url().then((variableName)=>{
    cy.log("Application url is: "+variableName)
    })

    Syntax
    For Single WebElement to get its visible text or to perform any action 
    ======================
    Note:
    - We are storing element address so use $ sign to strore variable
    - To perform action first use wrap($variable) then perform action,click,type...
    - To get the text of element use text() like getText() in selenium


    cy.get("locator").then(($variableName)=>{

        //To get the text
        $variableName.text();

        //To perform  click 
        cy.wrap($variableName).click();

        //To perform type
        cy.wrap($variableName).type("text");

        })


*/

describe("Test for multiple Webelement each()",()=>{

it("Test for Multiple options",()=>{

//open application
cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

//get all 13 options text in console
//Iterate through an array like structure (arrays or objects with a length property).
cy.get("div.list-group>a").each(($ele)=>{

//get the text
let linkText=$ele.text();
cy.log("Link Text is: "+linkText);

if(linkText.includes("Forgotten Password"))
{
    cy.log("Element found!")
    //click on that link
    cy.wrap($ele).click();
}

})

})



it.only("Automate Google Search Scenario",()=>{

//open application
cy.visit("https://www.google.com/");

//search for keyword
cy.get("#APjFqb").type("Jenkins");

//static wait
cy.wait(1000);

//get the list
cy.get("ul[role='listbox']>li").each(($option)=>{

    let textOfEle=$option.text();
    cy.log("Text is: "+textOfEle);

})


})


})

/*
Assignment:
Open https://www.freshworks.com/ and get the all footers list text in console

*/