const fs = require('fs');
const path = require('path');

let file1 = path.join(__dirname, 'data', 'input1.txt');
let file2 = path.join(__dirname, 'data', 'input2.txt');

const readFileContent = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(`Error Reading File: ${filePath} - ${err}`);
            else resolve(data.split('\n').map(line => line.trim()).filter(Boolean).map(Number));
        });
    });
};

//    option 1
// Promise.all([readFileContent(file1), readFileContent(file2)])
//     .then(([content1, content2]) => {
//         let mergedContent = [...content1, ...content2];
//         console.log("Original File Content:");
//         console.log(mergedContent.join('  | '));

//         let sortedContent = mergedContent.sort((a, b) => a - b);
//         console.log("\nSorted File Content:");
//         console.log(sortedContent.join('  | '));
//     })
//     .catch(error => console.error(error));




// option 2
async function output(){
    let data1 =  await readFileContent(file1);
    let data2 =  await readFileContent(file2);

    let finalArr = [...data1,...data2]
    let outputArr = finalArr.sort((a, b) => a - b);
    outputArr.join('\r \n');
    console.log(outputArr);
}
output();