function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
const n = Number(input.shift());
const amountList = input.shift().split(' ').map(v => +v);
amountList.sort((a, b) => a - b);

// 2 3 6 9 10
// 11 + 1.5 = 12.5
// 12.5 + 3 = 15.5
// 15.5 + 4.5 = 20
// 가장 큰 수 + (가장 작은 수 / 2) => 그 뒤로 작은 순서대로 진행

let ans = amountList[n - 1];
amountList.pop();

amountList.forEach((num) => {
  // ans 와 num 중 더 작은 숫자를 나눔
  if (ans > num) {
    ans += (num / 2);
  } else if (ans < num) {
    ans = (ans / 2) + num;
  }
});

console.log(ans);