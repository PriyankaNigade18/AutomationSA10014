/*
Group of statement we can run through function

In js there are two types:
--------------------------
1.Function declaration
2.Function Expression
    2.1 Anonymous function (Function without name)
    2.2. Arrow function
*/

console.log("------Function declaration------");

function show()
{
    console.log("show()...This is function declaration.....");
    
}

//call
show();

console.log("------Anonymous function------");


let test1=function()
        {
            console.log("test1() ...Anonymous function...");
            
        }


//call
test1();


console.log("------Arrow function------");

let test2=()=>{console.log("This is arrow function....");};

//call
test2();







