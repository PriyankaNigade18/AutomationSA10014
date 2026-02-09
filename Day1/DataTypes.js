/*
Variable:
-------------
Variable is name of storage location where we can store data

DataTypes
---------------
DataType define what type of data we can store into variable

Js support two types
-----------------------
1.Primitive types
-----------------
1.Number
2.String
3.Boolean
4.Undefined
5.Null

6.BigInt(NA for QA)
7.Symbol(NA for QA)

2.NonPrimitive types
--------------------
Object
Array

Note:
-----------
In Js we use var,let and const keywords

In Modern js we follow only let(Mutable) and const(Immutable)


variable Syntax:
------------------------
let id=101;

typeOf
---------------
In Js we are using typeof operator to define the type 
of data



*/

console.log("-----------number type----------------");
/*
Any positive/negative or decimal digit number is number type
*/

let num1=90;
console.log("Number 1 is: "+num1);//90
console.log("Type is: "+typeof num1);//number


let num2=-89;
console.log("Number 2 is: "+num2);//-89
console.log("Type is: "+typeof num2);//number



let num3=67.77;
console.log("Number 3 is: "+num3);//67.77
console.log("Type is: "+typeof num3);//number


console.log("-----Boolean type-(true/false)-------");

let isEnroll=true;
console.log("Is Student Eroll?: "+isEnroll);//true
console.log("Type is: "+typeof isEnroll);//boolean

let isActive=false;
console.log("Is Student Active?: "+isActive);//false
console.log("Type is: "+typeof isActive);//boolean

console.log("-----string type--------");

/*
String is collection of characters
In Js String is primitive data type and predefined Immutable Class

Declaration
---------------
1.Using single quoat 'Hello'
2.Using double quaot "Hello"
3.Using template string (back tick) `Hello`


*/

let userName="Sarang";
console.log("User name is: "+userName);//Sarang
console.log("Type is: "+typeof userName);//string

let gender='M';
console.log("Gender is : "+gender);//M
console.log("Type is: "+typeof gender);//string

//template string



let profile=`My nameis Priyanka,
I have over 15 years experience in IT and  
I am ISTQB certified TextDecoderStream, I completed my Masters in Computers`;
console.log("My profile: "+profile);
console.log("Type is: "+typeof profile);

let certificate="ISTQB";

let profile2=`My nameis Priyanka,
I have over 15 years experience in IT and  
I am ${certificate} certified TextDecoderStream, I completed my Masters in Computers`;
console.log("My profile: "+profile2);
console.log("Type is: "+typeof profile2);

console.log("-------------Undefined---------");
/*
If we declare variable without any assignment then type 
and value is undefined

*/

let data;
console.log("Data is: "+data);//undefined
console.log("Type is:"+typeof data);//undefined

console.log("-------null type------");

/*
Null means unknown data
for null data if you check type you will get Object
It is bug in js

*/
let address=null;
console.log("Address is: "+address);//null
console.log("Type is: "+typeof address);//object


console.log("-------NonPrimitive-----------");

let obj={};
console.log(obj);
console.log("Type is: "+typeof obj);


let user={
        id:101,
        fname:"Sarang"

        }
console.log(user);
console.log(typeof user);


//array
let arr=[];
console.log(arr);
console.log(typeof arr);//object

let arr2=[10,20,30,40];
console.log(arr2)
console.log(typeof arr2);
;












































