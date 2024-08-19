function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
let n = Number(input.shift());
const numList = input.shift().split(' ').map(v => BigInt(v));
numList.sort((a, b) => a < b ? -1 : 1);

// 2 5 8 9 11
// 13

let ans = 0
if (numList.length % 2 === 1) {
  ans = numList.pop();
  n -= 1;
}

for (let i = 0; i < (numList.length / 2); i += 1) {
  let tmp = numList[i] + numList[(numList.length - 1) - i]
  ans = tmp > ans ? tmp : ans;
}

console.log(String(ans));