/*
break:
--------------
To exit from switch case and loop body we use break

continue
---------------
To skip certain part of code and continue iteration we use continue

return 
-------------
To return any result/output from function/method we use return statment
*/

console.log("-------------break------------");

for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;
    }else{
    console.log(i);
    
    }

}

console.log("-----------------");



for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;
    }else{
    console.log(i);
    
    }

}

console.log("-----continue---------");


for(let i=1;i<=10;i++)
{
    if(i===5)
    {
       continue;
    }else
     {
    console.log(i);
    
    }

}

console.log("--------------");
for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
       continue;
    }else
     {
    console.log(i);
    
    }

}


console.log("------return --------");



function add()
{
    let a=100,b=200;
    return a+b;
}

let result=add();
console.log("Addition is: "+result);
console.log("---------");

console.log(add());






