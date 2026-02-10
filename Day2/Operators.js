
console.log("---Arithemetic operators---------");
// +,-,*,/,%

let a=10,b=5;
console.log("Addition is:"+(a+b));
console.log("Subtraction is: "+(a-b));
console.log("Multiplication is: "+(a*b));
console.log("Division is: "+(a/b));
console.log("Modulus is: "+(a%b));

console.log("----Interview Questions-----");

console.log(90/0);//Infinity
console.log(-90/0);//-Infinity
console.log("Hello"/0);//NaN: Not a number
console.log(undefined/6);//NaN
console.log(0/0);//NaN
console.log(9/3);//3

console.log("-----Unary Operator----");

/*
1.Increment(++):
---------------------------
a=100;
 postIncrement()   preIncrement()
a++;                    ++a
a++/++a= a=a+1 


2.Decrement(--)
--------------------
 postDecrement()   preDecrement()
a--;                    --a
a--/--a= a=a-1 
*/


let x=100;
console.log(x);//100
console.log(x++);//100
console.log(x);//101


let y=200;
console.log(y);//200
console.log(++y);//201


let c=90;
console.log(c);//90
console.log(c--);//90
console.log(c);//89

let d=67;
console.log(d);//67
console.log(--d);//66

let r=78;
let s=r++;//value will assign then increment by 1
console.log(r);//79
console.log(s);//78


let i=100;
let j=i++;
console.log(i);//101
console.log(j);//100

let p=50;
let l=++p;//value will increment first then assign
console.log(p);//51
console.log(l);//51

let n=176;
let m=++n;
console.log(m);//177
console.log(n);//177


let h=90;
let g=h--;
console.log(h);//89
console.log(g);//90

let u=689;
let t=--u;
console.log(u);//688
console.log(t);//688

console.log("---------Relational Operators----------");
/*
 <, <=,>,>=,!=

 == : loose equality in 
 --------------
 loose equality always follow type coercion (implicit casting)
 === : strict equality in
 --------------------------
 Strict equality will compare as it is value without type conversion

testdata
==============
n=m=177 h=89 g=90 i=101 j=100 r=79 s=78 u=t=688
*/

console.log("less than <: "+(h<g));//true
console.log("less than <=: "+(n<=m));//true
console.log(r<s);//false
console.log(i<=j);//false
console.log("greater than >: "+(r>s));//true
console.log("greater than eqaul to >=: "+(u>=m));//true
console.log(u>=t);//true
console.log(t!=u);//false
console.log(g>=j);//false

//equality ==   ===
console.log(5=="5");//"5" will be auto converted into number :true
console.log(undefined==null);//true

//strict equality === It is recommended
console.log(5==="5");//false

console.log(undefined===null);//false

console.log("-----Logical Operators-------");
/*

c1      c2      &&(AND)     ||(OR)      !(NOT)c1!
true    true    true        true        false
true    false   false       true        false
false   true    false       true        true
false   false   false       false       true

testdata
==============
n=m=177 h=89 g=90 i=101 j=100 r=79 s=78 u=t=688

*/

console.log("---&&----");

console.log((n==m) && (i>j));//true
console.log((r>s) && (m>u));//false
console.log((h>g) && (i>j));//false
console.log((n!=m) && (u!=t));//false

console.log("---||----");

console.log((n==m) || (i>j));//true
console.log((r>s) || (m>u));//true
console.log((h>g) || (i>j));//true
console.log((n!=m) || (u!=t));//false


console.log("---!(Not)----");
console.log(r>s);//true
console.log(!(r>s));//false

console.log(u!=t);//false
console.log(!(u!=t));//true

















































