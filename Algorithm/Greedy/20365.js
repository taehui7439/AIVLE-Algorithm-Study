function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
const n = Number(input.shift());
const prob = input.shift();
let ans = 0;

const rCnt = prob.split("B").filter((col) => col !== '').length;
const bCnt = prob.split("R").filter((col) => col !== '').length;

// BBBRRR인 경우엔 2 출력
// 나머지는 계산대로 출력
if (rCnt === 1 && bCnt === 1) {
  console.log(2)
  process.exit(0);
}

if (rCnt > bCnt) {
  ans += 1 + bCnt;
} else {
  ans += 1 + rCnt;
}

console.log(ans);