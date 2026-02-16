/*
String is collection of characters
String is Primitive data type and its immutable
String support multiple methods

length is property not method
*/

let msg="Hello All";
console.log("Total size of string: "+msg.length);

console.log(msg);
msg[0]="h";
console.log(msg);//strings are immutable

console.log("----Methods-------------");

//conversion: toLowerCase() toUpperCase()
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

//charAt(index):return character
let data="Playwright is weui automation apPi";

console.log(data.charAt(0));//P

console.log(data.indexOf('P'));//0
console.log(data.indexOf('p'));//31
console.log(data.indexOf('P',1));//32

//trim(): ignore white space before and after the string


let s1="       Welcome all        ";
console.log(s1);
console.log(s1.trim());

//concat() / +
let s2="Hello";
let s3="All";
console.log(s2+" "+s3);
console.log(s2.concat(" "+s3));

//search string : includes()

let data2="Playwright is weui automation api"

console.log('Search for api?: '+data2.includes("api"));//true
console.log("search for Selenium?: "+data2.includes("Selenium"));//false


//replace()
let info="Mocha is javascript framework and its for Playwright and Cypress we use as default framework"
console.log(info);
let newdata=info.replaceAll("framework","automation framework");

console.log(newdata);


//split(): regular expression: pattern

let tools="Selenium,Playwright,Cypress,Appium,Postman";
console.log(tools);

let arr=tools.split(",")
console.log(arr);


for(let i of arr)
{
    console.log(i);
    
}

console.log(tools.split(",")[3]);







