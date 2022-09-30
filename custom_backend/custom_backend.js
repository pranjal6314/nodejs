const http=require("http");
const fs=require("fs");
const port=3000;
const hostname='127.0.0.1';
const { type } = require("os");
let statusCode=200;
const file=fs.readFileSync("./index.html");
const about=fs.readFileSync("./about.html");
const contact=fs.readFileSync("./contact.html");
const home=fs.readFileSync("./home.html");
let server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.writeHead(statusCode,'content-type ','text/html');
    if(url=="/"){
    res.end(file);}
    else if(url =="/about"){
        res.end(about);
    }
    else if(url=="/contact"){
        res.end(contact);
    
    }
    else if(url=="/home"){
        res.end(home)
    }
    else{
        statusCode=404;

        console.log(`<h1>404 Not Found</h1>`);
    }
})
server.listen(port,hostname,()=>{
    console.log(`server running at http//${hostname}:${port}`)
})