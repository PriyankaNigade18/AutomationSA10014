
console.log("------Simple If-------");
/*
Simple if is applicable for single true condition
*/

//current year validation
console.log("---Program start----");

//positive scenario
let year=2026;
//year=2027;

if(year===2026)
{
    console.log("Current year matched..."+year);
    
}

console.log("---Program stop----");

console.log("---------------------");
//negative scenario
console.log("---Program start----");

//positive scenario
let cyear=2027;


if(cyear===2026)
{
    console.log("Current year matched..."+year);
    
}

console.log("---Program stop----");

console.log("--------If-Else--------");
/*
If -else statment we use for true/false 
*/

//age validation scenario

let age=10;

if(age>=18)
{
    console.log("Valid age!");
    
}else{
    console.log("Invalid age!");
    
}
console.log("--------------");

let num=-180;

if(num>0)
{
console.log(num+" is positive...");

}else
{
    console.log(num+" is negative...");
}


console.log("--------Ladder If--------");
/*
For multiple conditions evaluation we can use ladder if /nested if /switch case
*/

//scenario: greater or equal
let num1=200,num2=200;

if(num1>num2)
{
    console.log(num1+" is greater than "+num2);
    
}else if(num1===num2){
console.log("Both numbers are equal!");

}else{
    console.log(num2+" is greater than "+num1);
    
}

console.log("---------Real scenario------");
//Browser scenario


let bname="firefox".toLowerCase();

if(bname.includes("chrome"))
{
    console.log("Test case is executing on "+bname);
    
}else if(bname.includes("edge"))
{
    console.log("Test case is executing on "+bname);
}
else if(bname.includes("firefox"))
{
    console.log("Test case is executing on "+bname);
}else{
    console.log("Wrong choice of a browser!");
    
}

console.log("--------Nested If----------");
/*
Assignment: Design this code based on nested if
Passing criteria for student is 40 marks
 and then if marks between 40 to 60 then
gread B and above 60 grade is A

------------------
if marks are greater than 90 then grade should be A and if marks
are greater than 95 then grade should be A++ otherwise grade should be B



*/


let marks=96;

if(marks>=90)
{

    if(marks>=95)
    {
        console.log("A++");
        
    }else{
        console.log("A");
    
    }
}else{
    console.log("B");
    
}

console.log("---------Switch Case---------");
/*
switch case works as per key:value match
break statment exit form switch and loop body
*/

//traffic signals
let color="red";

switch (color)
 {
    case "red":
        console.log("STOP");
        
        break;
    case "yellow":
        console.log("READY");
        
        break;

    case "green":
        console.log("GO");
        
        break;


    default:
      console.log("Wrong color!");
      
}




































