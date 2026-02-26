
describe("Test for File Upload",()=>{


it("Test for SelectFile() with single file",()=>{

cy.visit("https://testautomationpractice.blogspot.com/");

//attaching a file
cy.get("#singleFileInput").selectFile("cypress/fixtures/Appiumsetup.txt")

//upload
cy.contains("Upload Single File").click();

//assertion
cy.get("#singleFileStatus").should("have.text","Single file selected: Appiumsetup.txt, Size: 5009 bytes, Type: text/plain");

})

it.only("Test for SelectFile() with Multiple file",()=>{

cy.visit("https://testautomationpractice.blogspot.com/");

//attaching a file
cy.get("#multipleFilesInput").selectFile(["cypress/fixtures/Appiumsetup.txt","cypress/fixtures/example.json"])

//upload
cy.contains("Upload Multiple Files").click();

//assertion
// cy.get("#multipleFilesStatus").should("have.text",`Multiple files selected:
// API Basics .pdf, Size: 192591 bytes, Type: application/pdf
// APIScripting.docx, Size: 14872 bytes, Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document`);

})


})