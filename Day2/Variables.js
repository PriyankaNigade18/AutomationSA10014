/*
Variable is name of storage location where we can store values

In js 3 keywords we use to declare variable
var,let and const

1.var(older/not recommended in modern js)
----------------------------------------
- scope: Global and Functional
- Redeclaration/reassignment is allowed

2.let
--------------------
-Scope: Global+Block
-let variables are mutable
-Redeclaration is not allowed
-Reassignment is allowed

3.const(final keyword java)
----------------------
-Scope: Global+Block
-const variables are Immutable
-Redeclaration/Reassignment is not allowed

functional scope:
-----------------------
Any variable declare in function that we can access within function
like local variable


Block scope:
-------------------
Any variable declare inside any block if block,for block,while block...etc
then we can access that variable within a block is block scope
{
}

Global Scope:
------------------
Any varibale declare outside any block or function is called global variable

*/


console.log("--------Global scope----------");


var fname="Hiteshi";
let address="Us";
const email="hiteshi@gmail.com";


console.log("User name is: "+fname);
console.log("Address is: "+address);
console.log("email is: "+email);


console.log("---Calling globaldata inside function----");

function test()
{
console.log("User name is: "+fname);
console.log("Address is: "+address);
console.log("email is: "+email);
}

//call
test()

console.log("---------Functional Scope----------");
//local variable
function test2()
{
    var tool="Selenium";
    let version=4.35;
    const dev="Jasson";
    console.log("----Inside function(local)-----");
    console.log(tool);
    console.log(version);
    console.log(dev);
}
//call
test2();

console.log("----Outside function-----");
    //console.log(tool);//ReferenceError: tool is not defined
    //console.log(version);//ReferenceError: version is not defined
    //console.log(dev);//ReferenceError: dev is not defined

    console.log("---------Block Scope----------");
/*Block scope:
-------------------
Any variable declare inside any block if block,for block,while block...etc
then we can access that variable within a block is block scope
{
}
Rule:
Only let and const are applicable for block scope
*/



if(true)
{
    let browserName="Chrome";
    const orgName="Google";
console.log("---Inside the block-----");

    console.log(browserName);
    console.log(orgName);
    
    
}

console.log("---Outside the block-----");

   // console.log(browserName);//ReferenceError: browserName is not defined
    //console.log(orgName);//ReferenceError: orgName is not defined

console.log("-------Redeclaration Rule-----");
//var : redeclaration is allowed
var automationTool="Selenium";

var automationTool="Cypress";

var automationTool="Playwright";
automationTool="QTP";

console.log(automationTool);

//Redeclaration for var keyword is allowed so it is not recommended by js/older

//redeclaration for let and const which is not allowed

//Cannot redeclare block-scoped variable 'book'.
let book="Learn step by step Playwright";
//let book="Learn step by step Playwright";//not allowed
book="Learn Step by Step Selenium";//reassignment


const mobile="One plus";

//const mobile="iphone";//Cannot redeclare block-scoped variable 'mobile'.

mobile="iphone";//TypeError: Assignment to constant variable.