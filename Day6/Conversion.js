/*
Any JSOn String we can convert into Javascript object: parse()

Any Js object we can convert into JSON String: stringify()
*/

//javascript object into Json String
let user={
    id:101,
    name:"Sumit"
}
console.log(user);
console.log(typeof user);//object
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let jsToJson=JSON.stringify(user);
console.log(jsToJson);
console.log(typeof jsToJson);//string


console.log("-------------------------");



let jsonData=`{
   "id": "7",
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}`

console.log(jsonData);
console.log(typeof jsonData);//string


//json to Js object
//parse:Converts a JavaScript Object Notation (JSON) string into an object.
let jsonToJs=JSON.parse(jsonData);
console.log(jsonToJs);
console.log(typeof jsonToJs);//object

console.log(jsonToJs.data.year);//2019

console.log(jsonToJs.name);

