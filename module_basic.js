const fs=require("fs");
let text=fs.readFileSync("delete.txt","utf-8");
console.log(text);

text = text.replace("pranjal","rohan");
console.log(" creating new txt file rohan.txt");
fs.writeFileSync("rohan.txt",text);

const pth=require("path");
let path=pth.basename("C:\ Users\ 91957\ Desktop\ nodejs\ rohan.txt");
console.log(path);
path = pth.extname('C:\ Users\ 91957\ Desktop\ nodejs\ rohan.txt');
console.log(path)

// path=path.parse('C:\\path\\dir\\file.txt');
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
path=pth.parse('C:\ Users\ 91957\ Desktop\ nodejs\ rohan.txt');
console.log(path);



