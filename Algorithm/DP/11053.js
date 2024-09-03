const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let n = Number(input.shift());
  let list = input[0].split(" ").map(v => +v);

  let dp = new Array({ length: n });
  dp[0] = 1;

  // 배열 안에 수열의 길이 저장
  for (let i = 1; i < n; i += 1) {
    let max = 0;
    for (let j = 0; j < i; j += 1) {
      if (list[j] < list[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  console.log(Math.max(...dp));
};

solution(input);