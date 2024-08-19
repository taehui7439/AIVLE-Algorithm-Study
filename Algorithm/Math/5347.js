const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const n = Number(input.shift());
const numList = input.map(v => v.split(' ').map(b => +b));

const calGcd = (num1, num2) => {
  while (num2 > 0) {
    let tmp = num1 % num2;
    num1 = num2;
    num2 = tmp;
  }
  return num1
}

const calLCM = (num1, num2) => {
  let ans = (num1 * num2) / calGcd(num1, num2);

  return ans;
}

let result = "";
for (let i = 0; i < n; i++) {
  // 최소 공배수 계산
  let ans = calLCM(numList[i][0], numList[i][1]);
  result += ans + "\n";
}

console.log(result);