

/*
let response=fetch("https://api.restful-api.dev/objects/7");
console.log(response);
//Promise { <pending> }
// 


When Any method return promise then declare that code inside 
async function and then handle that statement which throws promise 
with await keyword

*/



async function apiTest()
{

let response=await fetch("https://api.restful-api.dev/objects/7");
console.log(response);
}

//call
//apiTest();

//pizza Anology

//create promise
function makePizza()
{
    return new Promise(resolve=>{
        setTimeout(()=>{resolve("Pizza is ready in 2sec")},2000);
    })
}


async function order()
{
    console.log("Placing order for pizza");
    let res=await makePizza();
    console.log("waiting for pizza");
    console.log(res);
  
     
}


//call
order();


