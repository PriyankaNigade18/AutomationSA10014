/*
Call back function/Higher order function
-----------------------------------------
Whenever we pass function itself as parameter to other function is called callback function
or higher order function

*/

function msg(fname)//fname is parameter
{
    console.log("Hello "+fname+" Welcome to learn Javascript!");
    
}

//accept two parameter 1.username 2.fun:call back function
function greet(username,fun)
{
    fun(username);
}


//call

greet("Kiran",msg);//msg is call back function
greet("Smita",msg);

console.log("--------------------------");







function add(a,b)
{
    console.log("Addition is: "+(a+b));
    
}

function sub(a,b)
{
    console.log("Subtraction is: "+(a-b));
    
}
function mul(a,b)
{
    console.log("Multiplication is: "+(a*b));
    
}
function div(a,b)
{
    console.log("Division is: "+(a/b));
    
}


 function calculate(a,b,fun)
 {
    fun(a,b);
 }


calculate(100,200,add);
calculate(10,20,mul);
calculate(100,30,div);
calculate(45,67,sub);






