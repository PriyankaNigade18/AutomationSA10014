/*
Object is Key value pair in Js
Object is any real time entity which has state and functionality

Ways
------------
1.Object literal
2.Class level object
3.Constuctor function
4.Object.create()

*/
console.log("---------Object Literal--------");

let person={};
console.log(person);
console.log(typeof person);//object

let user={
    id:101,
    fname:"Sarang",
    city:"Mumbai"
}

console.log(user);
console.log(typeof user);//object
console.log(user.id);
//console.log(user[fname]);//ReferenceError: fname is not defined

console.log("-----Iteration for keys-------");

for(let i in user)
{
    console.log(i);
    
}

console.log("-----Iteration for values-------");

for(let i in user)
{
    console.log("For key: "+i+" value is: "+user[i]);
    
}



console.log("-----Class level object----");

class Fruit
{
    name;
    price;

    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }

    show()
    {
        console.log("Fruit name is: "+this.name);
        console.log("Fruit price is: "+this.price);
        
        
    }
    
}

//object
let f1=new Fruit("Apple",360);
f1.show();


console.log("-----Constructor function------");
/*
Constructor function is special function to create and initilize object in js
*/

function Employee(id,name)
{
    this.id=id;
    this.name=name;

    //method
    this.show=()=>{
        console.log("Employee id is: "+this.id);
        console.log("Employee name is: "+this.name);
        
        
    }

    //wrong syntax
    // display()
    // {
    //     console.log("this is display function/method");
        
    // }


}
//object
let e1=new Employee(101,"Pradeep");
e1.show();
//e1.display();//ReferenceError: display is not defined


console.log("-------Object.create()-------");


//Creates an object that has the specified prototype or that has null prototype.
//Object.create();


let student={
    id:111,
    name:"Praneeth",
    marks:78
}

let s1=Object.create(student);
console.log(s1.id);
console.log(s1.name);
console.log(s1.marks);





