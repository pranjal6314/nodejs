// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pranjalKart');
var db=mongoose.connection;
db.on('error',console.error.bind(console,"connection error...."));
db.once('open',function(){
        console.log("connected...");
 });

// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://localhost/pranjalKart');
//   console.log("connected to server..")
// }


//schema
const kittySchema = new mongoose.Schema({
        name: String
      });
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
        const greeting = "hello "+this.name
        console.log(greeting);
      };
      
//modle      
const Kitten = mongoose.model('Kitten', kittySchema);


const pranjalKitty = new Kitten({ name: 'pranjal choudhary' });
// console.log(pranjalKitty.name); // 'Silence'
// pranjalKitty.speak();p

pranjalKitty.save(function(err,pranjalKitty){
        if(err)return console.error(err);
        pranjalKitty.speak();
})