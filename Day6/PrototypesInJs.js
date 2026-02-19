/*
Prototype is an object that is associated with every function and object by default in javascript
Prototype is used to add new properties and methods to every function or object which is shared across all the instances.

*/


class Employee
{
eid;
ename;

constructor(id,name)
{
this.eid=id;
this.ename=name;
}

}

//prototype
Employee.prototype.toolName="Selenium";

//object
let e1=new Employee(101,"Sujit");
//e1.toolName="Selenium";
console.log("Employee id is: "+e1.eid+" Employee name is: "+e1.ename+" ToolName: "+e1.toolName);

let e2=new Employee(201,"Kiran");
console.log("Employee id is: "+e2.eid+" Employee name is: "+e2.ename+" ToolName: "+e2.toolName);

let e3=new Employee(301,"Smita");
console.log("Employee id is: "+e3.eid+" Employee name is: "+e3.ename+" ToolName: "+e3.toolName);

console.log("------------------------------");

let fname="   Amit    ";
console.log("length is: "+fname.length);//11
console.log("truelenght is: "+fname.trim().length);//4


String.prototype.trueLength=function()
                                {
                                return this.trim().length;
                                }


let result=fname.trueLength();
console.log("Truelength with prototype: "+result);


let sname="     Tushari     ";
console.log(sname.trueLength());



