/*
Type Casting is conversion of one type of data into other type

In Js we have two types
1.Type Coercion:Is Implicit casting where data will be automatically 
converted by Js

2.Explicit:
---------------
Forcefull conversion
Here one type we can convert into other manually
String()
Number()
Boolean():Consctructor

Type Casting in js is applicable only for string,number and boolean

Truthy and falsy
--------------------
Truthy:
-------
Any true value in boolean context is truthy value
Example: any non zero number,non empty string...etc

Falsy:
-------------------
Any false value in boolean context is falsy value
Example: 
0,"",null,undefined,false,NaN etc


*/
console.log("--------String conversion------");
/*
number and boolean ----converting into String

Rule:
--------
Whenever we use any String with + operator and type is covertable then number
and boolean will convert into string

*/

let a="100"+20+30;//20 and 30 which is number coerced into string
console.log(a);//1002030
console.log(typeof a);//string

let b=100+20+"500";//100 and 20 coerced into string
console.log(b);//120500
console.log(typeof b);//string

let c="100"+true;//true will coerced into string
console.log(c);//100true
console.log(typeof c);//string

console.log("--------Number conversion------");
/*
Whenever we perform any arithmetic operation(-,*,/) on String
then string will convert into number
string should be convertable

*/

let d="hello"*100;
console.log(d);//NaN

let e="100"*10;// "100" coerced into number
console.log(e);//1000
console.log(typeof e);//number

let i="100"/100;
console.log(i);//1
console.log(typeof i);//number

let j=10+20+"100"*10;//"100"*10=1000 then 10+20+1000=1030
console.log(j);//1030
console.log(typeof j);//number

console.log("-----Explicit casting for String and number-----");

let num=100;
console.log(num+100);//200

//To convert number into String use String()
let numToStringConversion=String(num); 
console.log(numToStringConversion);//"100"
console.log(typeof numToStringConversion);//string
console.log(numToStringConversion+100);//100100
console.log(numToStringConversion-100);//0

console.log("-----------------");

//To convert String(should be compatible) into number use Number()

let data="Hello";
let n=Number(data);
console.log(n);//NaN

let data1="1000";
console.log(data1+100);//1000 100
console.log(typeof data1);//string
//convert into number
let stringToNumConversion=Number(data1);
console.log(stringToNumConversion);//1000
console.log(stringToNumConversion+100);//1100

console.log(typeof stringToNumConversion);//number

//boolean to number
let booleanTonum=Number(true);
console.log(booleanTonum);//1
console.log(typeof booleanTonum);//number


let booleanTonum1=Number(false);
console.log(booleanTonum1);//0
console.log(typeof booleanTonum1);//number

console.log("----------Boolean Conversion-------");


/*
Boolean conversion
Truthy and falsy
--------------------
Truthy:
-------
Any true value in boolean context is truthy value
Example: any non zero number,non empty string...etc

Falsy:
-------------------
Any false value in boolean context is falsy value
Example: 
0,"",null,undefined,NaN,false....etc
*/

console.log(Boolean("Jay"));//true
console.log(Boolean(90));//true
console.log(Boolean(89.66));//true
console.log(Boolean(-18));//true
console.log(Boolean('A'));//true

console.log("----------------");


console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
console.log(Boolean(undefined));//false





























