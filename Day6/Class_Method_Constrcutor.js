

class StudentData
{
//public data +Global
id;
fname;

//to initilize object constructor is required
constructor(sid,sname)
{
    this.id=sid;
    this.fname=sname;

}

/*SyntaxError: A class may only have one constructor
constructor(sid)
{
    this.id=sid;
}*/

//Method
 print()
{
console.log("Student id is: "+this.id);
console.log("Student name is: "+this.fname);

}

}

//Object
const s1=new StudentData(101,"Kiran");
console.log(s1.id);
s1.print();


const s2=new StudentData(201,"Ashwini");
s2.print();

const s3=new StudentData(301);
s3.print();