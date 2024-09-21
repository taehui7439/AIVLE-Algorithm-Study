const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, type] = input[0].split(" ");
  n = Number(n);
  let names = input.slice(1);
  names = [...new Set(names)];
  let people = 0;

  if (type === 'Y') {
    people = 1;
  } else if (type === 'F') {
    people = 2;
  } else {
    people = 3;
  }

  let result = Math.floor((names.length) / people);

  console.log(result);
};

solution(input);