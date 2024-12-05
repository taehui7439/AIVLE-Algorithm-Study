const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, ...numList] = input.map(Number);
  let dp = Array.from(Array(10001), () => Array(4).fill(0));

  // 1 => 1
  // 2 => 1+1, 2
  // 3 => 1+1+1, 1+2, 3
  // 4 => 1+1+1+1, 1+1+2, 2+2, 1+3
  // 5 => 1+1+1+1+1, 1+1+1+2, 2+2+1, 2+3, 1+1+3
  // 6 => 1+1+1+1+1+1, 1+1+1+1+2, 1+1+2+2, 2+2+2, 3+3, 1+1+1+3

  dp[1][1] = 1;
  dp[2][1] = 1;
  dp[2][2] = 1;
  dp[3][1] = 1;
  dp[3][2] = 1;
  dp[3][3] = 1;

  for (let i = 4; i <= 10000; i += 1) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
  }

  for (let i = 0; i < n; i += 1) {
    let cnt = numList[i];

    console.log(dp[cnt][1] + dp[cnt][2] + dp[cnt][3]);
  }
}

solution(input);