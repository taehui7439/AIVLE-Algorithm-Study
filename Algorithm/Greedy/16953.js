function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
const n = Number(input[0].split(' ').shift());
let target = Number(input[0].split(' ')[1]);
let cnt = 0;


while (true) {
  if (n === target) break;
  else if (target < n) {
    return console.log(-1);
  }

  let targetString = target.toString();

  if (target % 2 === 1) {
    if (targetString[targetString.length - 1] === '1') {
      target = Math.floor(target / 10);
    } else {
      return console.log(-1);
    }
  } else if (target % 2 === 0) {
    target /= 2;
  }
  cnt += 1;
}

console.log(cnt + 1);