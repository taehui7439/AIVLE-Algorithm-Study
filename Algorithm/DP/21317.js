const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let n = Number(input.shift());
  let k = Number(input.pop());
  let list = input.map(v => v.split(" ").map(b => +b));

  let dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  /* 더 작은 단계로 나누기
  1개씩, 2개씩, 큰 점프
  1개, 2개일때 최소를 계산
  그 다음 큰 점프 했을 때, 최소를 계산
  */

  for (let i = 0; i < n - 1; i += 1) {
    // 1개, 2개씩 넘어갈 때 계산
    // console.log(dp[i + 1], dp[i], list[i][0]);
    if (i + 1 < n) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i] + list[i][0]);
    }
    if (i + 2 < n) {
      dp[i + 2] = Math.min(dp[i + 2], dp[i] + list[i][1]);
    }
  }

  // 큰 점프 적용했을 경우
  let min = dp[n - 1];
  for (let j = 3; j < n - 1; j += 1) {
    let e = dp[j - 3] + k;
    let dp1 = Infinity;
    let dp2 = Infinity;

    for (let k = j; k < n - 1; k += 1) {
      if (j + 1 < n) {
        dp1 = Math.min(dp1, e + list[j][0]);
      }
      if (j + 2 < n) {
        dp2 = Math.min(dp2, e + list[j][1]);
      }
      e = dp1;
      dp1 = dp2;
      dp2 = Infinity;
    }
    min = Math.min(min, e);
  }
  console.log(min);
};

solution(input);