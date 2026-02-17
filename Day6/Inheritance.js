/*
Inheritance:
-------------------
Accessing properties from one class into other class

Purpose:
-------------
1.To avoid code duplication
2.For reusability of code
3.Runtime polymorphism

Real time example
-------------------
Parent and child relation

How to implement
------------------
using extends keyword

Types:
---------------
1.Single level
2.Multi level
3.Hierarchical 

4.Multiple(not implement in Js)
5.Hybrid(not implement in Js)

Rule
------------
Parent class can access only parent propreties
Child class can access Parent + child properties


*/


class Vehical
{
    breakFeature()
    {
        console.log("Vehical......breakfeature()");
        
    }
}

class Car extends Vehical
{
    price()
    {
        console.log("Car.......1L");
        
    }
    start()
    {
        console.log("Car....start()");
        
    }
    refule()
    {
        console.log("Car....refule()");
        
    }
    stop()
    {
        console.log("Car....stop()");
        
    }
}

class BMW extends Car// Single Level here Car is parent and BMW is child
{

     price()
    {
        console.log("BMW.......70L");
        
    }
    autoEngine()
    {
        console.log("BMW......autoEngine()");
        
    }
}


class Audi extends Car//Hierarchical 
{
    autoGear()
    {
        console.log("Audi.....autoGear()");
        
    }
      price()
    {
        console.log("Audi.......50L");
        
    }
}

//object

//parent class object:parent class methods
let c1=new Car();
c1.start();//individual 
c1.refule();//individual 
c1.stop();//individual 
c1.breakFeature();//inherited
c1.price();

console.log("--------------------");


//child class object:child +parent class method
let b1=new BMW();
b1.start();//inherited
b1.refule();//inherited
b1.autoEngine();//individual
b1.stop();//inherited
b1.breakFeature();//inherited
b1.price();

console.log("----------");
let a1=new Audi();
a1.start();//inherited
a1.refule();//inherited
a1.autoGear();//individual
a1.stop();//inherited
a1.breakFeature();//inherited
a1.price();











