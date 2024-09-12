const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let t = Number(input.shift());

  for (let i = 0; i < t; i += 1) {
    let n = Number(input.shift());
    let list = [];

    // list 생성
    for (let j = 0; j < 2; j += 1) {
      list.push(input.shift().split(" ").map(v => +v))
    }



  }
};