/*

1.for loop
-----------------
Whenever number of iterations are fixed then use for loop

automating calendar/menu

2.while loop
---------------------
- while loop is entry controlled loop
-Whenever number of iterations are not fixed then use while loop
automating pagination/page load time out

3.do while
-----------------------
- dowhile loop is exit controlled loop
- One time iteration without matter what condition it is then use dowhile




*/



console.log("--------for loop--------");

//print hello statement 5 time
for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("-----------------");

//print 1 to 10 numbers
for(let i=1;i<=10;i++)
{
    console.log(i);
    
}
console.log("-----------------");

//print 10 to 1 number

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("-----------------");
/*
print factorial of a number

5!=5*4*3*2*1=120

*/
let fact=1;

for(let i=5;i>=1;i--)
{
fact=fact*i;
}

console.log("Factorial of 5 is: "+fact);

console.log("-------------");

// for(;;)//by default condition is always true
// {
//     console.log("Hi");//code will run infinite time
    
// }

console.log("-------------");



console.log("------while loop------");

//print hi for 5 time
let i=1;
while(i<=5)
{
    console.log("Hi");
    i++;
}

console.log("---------");

/*
sum of 100 natural numbers
1+2+3+4+5......+100=5050
*/

let j=1,sum=0;
while(j<=100)
{
sum=sum+j;
j++;
}


console.log("Sum of 100 natural numbers is:"+sum);

console.log("-------do while-----");

let k=1;

do
{

    console.log("Welcome!");
    k++;
    
}while(k>5);

console.log("----------------");

let p=1;

do
{
   console.log("Bye!");
    p++;
    
}while(p<5);


























