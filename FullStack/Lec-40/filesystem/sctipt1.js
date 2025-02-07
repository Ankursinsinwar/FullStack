const fs = require('fs');
const path = require('path');

let data = "This is Temp String Data"
let loc = path.join(__dirname,'data','temp.txt');

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         console.log("Error Writing File:",err);
//         return;
//     }
//     console.log("File Saved Successfully");
// });

fs.readFile(loc,(err,data)=>{
    if(err){
        console.log("Error Reading File:",err);
        return;
    }
    if(data.toString()==''){
        console.log("file is Empty");
        return;
    }
    console.log(data.toString());
});