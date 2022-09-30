

function sumation(arr){
    let sum=0;
   arr.forEach(element => {
        sum+=element;
    });
    return "sum of total numbers ="+sum;
}
// module.exports=sumation;
module.exports={

    s:sumation,
    name:'pranjal',
    repo:'github'
}