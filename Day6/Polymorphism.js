
/*
Polymorphism
----------------
Process where one thing we can reuse in multiple form

Purpose
------------
Method Reusability

Types
-----------
1.Compile time (Method Overloading)
2.Run time (Method Overriding)

Method Overloading
-----------------
Method can be overloaded when same name method declare in one class
with different signature

1.Number of Paremeters
2.Types of paremeter
3.Change order of parameters


In Js Method Overloading is not possible as Js is interpreter based language
we don't have here any compilation phase

Run time polymorphism
-------------------------
For Run time polymorphism Classes must have IS-A relation
Then same name method with same syntax if avialable in both 
the class then Child class method always override parent class method

*/



class Test
{

    login()
    {
        console.log("This is Login() calling......");
        
    }

    
    login(un,psw)
    {
        console.log("This is Login() with username: "+un+ "with password: "+psw);
        
    }

    login(psw)
    {
        console.log("This is login() with password: "+psw);
        
    }
}

//object
let t1=new Test();
t1.login("Admin","Admin123");


console.log("----run time Polymorphism-----");


class Parent
{

    color()
    {
        console.log("Yellow");
        
    }
}


class Child extends Parent
{
    
    color()
    {
        console.log("Blue");
        
    }
}



let p1=new Parent()
p1.color();//yellow

let c1=new Child();
c1.color();//blue


