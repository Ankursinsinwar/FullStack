const fs = require('fs');
const path = require('path');

let file1 = path.join(__dirname, 'data', 'index1.txt');
let file2 = path.join(__dirname, 'data', 'index2.txt');

const readFileContent = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(`Error Reading File: ${filePath} - ${err}`);
            else resolve(data.split('\n').map(line => line.trim()).filter(Boolean).map(Number));
        });
    });
};


Promise.all([readFileContent(file1), readFileContent(file2)])
    .then(([content1, content2]) => {
        let mergedContent = [...content1, ...content2];
        console.log("Original File Content:");
        console.log(mergedContent.join('   '));

        let sortedContent = mergedContent.sort((a, b) => a - b);
        console.log("\nSorted File Content:");
        console.log(sortedContent.join('   '));
    })
    .catch(error => console.error(error));