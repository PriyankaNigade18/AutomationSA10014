/*
Group of statement we can run through function

In js there are two types:
--------------------------
1.Function declaration
2.Function Expression
    2.1 Anonymous function (Function without name)
    2.2. Arrow function
*/

console.log("-------Function Declaration without parameter----------------");

function test1()
{
    console.log("Function declaration is calling....");
    
}

//call

test1();
console.log("-------Function Declaration with parameter----------------");


function test2(a,b)//a & b are parameters
{
console.log("text2() addition is: "+(a+b));

}

test2(100,200);

console.log("-------Function Declaration with parameter & return keyword----------------");

function test3(msg)
{
return msg;
}

//call
let result=test3("Hello All!");
console.log(result);

console.log(test3("Welcome"));

console.log("-------Anonymous function without parameter---------");


let test4=function()
    {
        console.log("Anonymous function is calling.....");
        
    }

    //call

    test4();

console.log("-------Anonymous function with parameter---------");

let test5=function (a,b)
{
console.log("test5() addition is: "+(a+b));

}

//call
test5(10,90);

console.log("-------Anonymous function with parameter & return Keyword---------");

let test6=function(a,b)
{
    return a*b;
}

//call
console.log("Multiplication is: "+test6(10,20));

console.log("-------Arrow Function without parameter---------");

let test7=()=>{console.log("Arrow function is calling....");}

//call
test7();

console.log("-------Arrow Function with parameter---------");

let test8=(a,b)=>{
console.log("test8() Division is: "+(a/b));

}


//call
test8(90,3);
test8("Hi",10);

console.log("-------Arrow Function with parameter & return keyword---------");

let test9=(msg)=>{
return msg;
}

let res=test9("All Done!");
console.log(res);










