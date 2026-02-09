
/*
Interview question
variable and function declaration are move towards top of the scope before declaration
Hoisting is the behavior where you can able to access variable before even declaring it.
Hoisting is applicable for Var type and function declaration

hoisting is not applicable for let and const and for function expression
*/
console.log(broswername);//undefined
var broswername="chrome";
console.log(broswername);//chrome

//console.log(tool);//ReferenceError: Cannot access 'tool' before initialization
let tool="Selenium";
console.log(tool);//Selenium

//console.log(data);//ReferenceError: Cannot access 'data' before initialization
const data="Hello";
console.log(data);



console.log("----hoisting for function declaration-----");

test1();



function test1()
{
    console.log("This is test1()....");
    
}


//test2();//ReferenceError: Cannot access 'test2' before initialization
test1();

//anonymous function

let test2=function()
{
console.log("This is test2()...");

}


test2();
