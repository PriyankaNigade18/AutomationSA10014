/*
Encapsulation:
-----------------------
It is wrapping of data and function together in single unit

Purpose:
---------------
Data hiding / data security

Real time examples
---------------
Capsule, Class,ATM,Mobile,Remote

How to implement is Js
===================
Here we can design data as private data and we can provide access with 
public methods like getters() and setters()

*/


class Emp
{
id;
name;
#salary;//private data

constructor(id,name)
{
    this.id=id;
    this.name=name;
}

show()
{
    console.log("Employee id is: "+this.id);
    console.log("Employee name is: "+this.name);
    console.log("Employee salary is: "+this.#salary);
    
       
}

//setter: set the data
setSalary(salary)
{
this.#salary=salary;
}

//getter: get the data
getSalary()
{
    return this.#salary;
}


}

//object
let e1=new Emp(111,"Pooja");
console.log(e1.id);//111
//console.log(e1.#salary);//SyntaxError: Private field '#salary' must be declared in an enclosing class

e1.setSalary(80000);
console.log(e1.getSalary());

e1.show();









