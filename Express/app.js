const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS   STUFF
app.use('/static',express.static('static'));//for serviving static file
app.use(express.urlencoded());//help in taking data from form

//PUG SPECIFIC STUFF
app.set('view engine','pug');//set template engine as pug
app.set('views',path.join(__dirname,'views'));//set the view directory



//out pug demo endpoint
app.get('/',(req,res)=>{
    
    const con='work hard ,you will acheive  to your goal';
    const params={'title':'hello pranjal','content':con};
    res.status(200).render('index.pug',params);
})
// app.get('/demo', function (req, res) {
//     res.status(200).render('demo', { title: 'Hey pranjal', message: 'how are you' })
//   })

app.post('/', (req, res)=>{
    console.log(req.body);
    name = req.body.name
    age = req.body.age
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})


// app.get('/',(req,res)=>{
//     res.send("this is my first express app");
// })
// app.get('/about',(req,res)=>{
//     res.send("this is get request  about page");
// })

// app.post("/about",(req,res)=>{
//     res.status(200).send("this is post req about page");
// });
// app.get("/this",(req,res)=>{
//     res.status(404).send("this page note found");
// })

//START THE SERVER
app.listen(port,()=>{
    console.log(`the applicaton is started successfully on port ${port}`);
})

