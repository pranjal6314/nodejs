//synchronous or blocking 
// line by line run code

// Asynchronous or non-blocking
//line by line execution  not guaranteed
//callback  will fire

const fs=require("fs");
let text=fs.readFile("delete.txt","utf-8",(error,data)=>{
    console.log(error + " "+data);
});
console.log("this msg come after reading and print of file but readFile is a Asynchronous function so may be this msg print before printing file");
