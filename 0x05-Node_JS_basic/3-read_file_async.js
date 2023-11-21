const fs = require('fs');

const firstname = [];
const name = [];
const name2 = [];
function processCSVData(csvData) {
  const lines = csvData.trim().split('\n');
  //   console.log(lines);
  lines.forEach((element) => {
    firstname.push(`${element.split(',')[0]}/${element.split(',')[3]}`);
  });
  for (const word of firstname) {
    if (word.endsWith('SWE')) {
      name.push(word.split('/')[0]);
    }
    if (word.endsWith('CS')) {
      name2.push(word.split('/')[0]);
    }
  }
  //   console.log(firstname);
  //   console.log(name);
  //   console.log(name2);
  console.log(`Number of students: ${firstname.length - 1}`);
  console.log(`Number of students in SWE: ${name.length}. List: ${name.join(', ')}`);
  console.log(`Number of students in CS: ${name2.length}. List: ${name2.join(', ')}`);
}

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, csvData) => {
      if (csvData) {
        resolve(processCSVData(csvData));
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
