// 규칙 계산?
// 1자리 => 9
// 2자리 => 9 * 2 - 1 = 17
// 3자리 => 9 * 2 * 2 - 3 = 33
// 4자리 => 9 * 2 * 2 * 2 - 7 = 65
// dp[i+1] = dp[i] * 2 - 1

// 9, 8, (7, 9), (6, 8, 8)
// 1, (2), (1, 3), (2, 1, 2)

/*
수 계산말고 자리수, 끝자리로 배열 기록
dp[i][j] i자리 수, j로 끝나는 수의 갯수
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 2, 2, 2, 2, 2, 2, 2, 2, 1];
dp[3] = [1, 3, 4, 4, 4, 4, 4, 4, 3, 2];

*/

const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let n = Number(input);
  let inf = 1000000000;
  let dp = Array.from(new Array(n + 1), () => new Array(10).fill(0));
  dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  dp[2] = [1, 2, 2, 2, 2, 2, 2, 2, 2, 1];

  // i = 자리수, j = 끝자리가 0~9인 수의 갯수
  for (let i = 3; i <= n; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][1] % inf;
      } else if (i >= 1 && i <= 8) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1] % inf;
      } else {
        dp[i][j] = dp[i - 1][8] % inf;
      }
      // console.log(i, j, dp[i][j]);
    }
  }

  let sum = 0;
  for (let k = 0; k < 10; k += 1) {
    sum += dp[n][k];
  }

  return sum % inf;
};

console.log(solution(input));