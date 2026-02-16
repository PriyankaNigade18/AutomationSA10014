
let number=[10,20,30,40,50];
console.log("-----Iteration using simple for loop------");
for(let i=0;i<number.length;i++)
{
    console.log(number[i]);
    
}
console.log("-----Iteration using  for...of loop------");
//for...of loop
//Iterates over values and applicable for array and string

for(let i of number)
{
    console.log(i);
    
}
console.log("-----Iteration using  for...in loop------");
//for...in loop
//Iterates over keys or index and applicable for object

for(let i in number)
{
    console.log(i);
    
}
console.log("-------------");

for(let index in number)
{
    console.log("for index: "+index+" value is: "+number[index]);
    
}
