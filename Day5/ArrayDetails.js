/*
Array is Data structure 
In Js its dynamic type
Array can store collection similar and differnt type of data/object

Array implemented in js as Object
Types
========
1.Single Dimensional array (1D)
2.Multi Dimensional array(2D)

syntax:
let variable=[el1,el2,el3..n]

Array store data as per index
index starts from 0
Js array support methods and length as property

*/


let arr=[];
console.log(arr);
console.log(typeof arr);//Object


console.log("------------");

let sid=[101,102,103,104,105];
console.log(sid[3]);//104
console.log(sid);//[ 101, 102, 103, 104, 105 ]
console.log(sid[9]);
console.log("Total elements in array: "+sid.length);

console.log("----------------");

let data=["Sarang","Pune",'M',25,8789789];
console.log(data);

console.log("-------Multi D array--------");
let credentials=[["Admin","admin123"],["Sumit","test123"],["Pooja","test123"]];
console.log(credentials);

console.log(credentials[1]);
//[ 'Sumit', 'test123' ]
console.log(credentials[1][0]);

console.log("-----------Methods------------------");

let userData=["Reshma","Kiran","Pooja","Sumit","Geeta"];
console.log(userData);//[ 'Reshma', 'Kiran', 'Pooja', 'Sumit', 'Geeta' ]

//push():Appends new elements to the end of an array, and returns the new length of the array.
userData.push("Jay");

console.log(userData);//[ 'Reshma', 'Kiran', 'Pooja', 'Sumit', 'Geeta', 'Jay' ]

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
userData.unshift("Neha");
console.log(userData);


//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedEntry=userData.shift();

console.log(userData);
console.log(deletedEntry);//Neha

//pop():Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedEntry2=userData.pop();
console.log(deletedEntry2);
console.log(userData);

console.log("----------------------");


let color=["red","white","blue","grey","pink","black","green","orange"]
        //  0      1       2      3       4       5      6      7
        console.log(color);
        
//splice:Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//splice(starting index,delete count,replacement data)
let deletedColor=color.splice(2,1);//it will start at index2 and delete 1 color(blue) 
console.log(deletedColor);
console.log(color);

//start with 0 and delete 3 colors
let deletedcolor2=color.splice(0,3);
console.log(deletedcolor2);//[ 'red', 'white', 'grey' ]
console.log(color);//[ 'pink', 'black', 'green', 'orange' ]

color.splice(1,1,"red");
console.log(color);//[ 'pink', 'red', 'green', 'orange' ]


color.splice(2,1,"Black","Blue","White");

console.log(color);//[ 'pink', 'red', 'Black', 'Blue', 'White', 'orange' ]

console.log("------map()-----");

let number=[1,2,3,4,5];
//square of every number
let result=number.map((n)=>{
return n*n;
});

console.log(result);















