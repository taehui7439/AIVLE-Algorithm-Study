const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

/*
오른쪽으로 움직이면서 왼쪽 커서도 움직임
1. 0 ~ r 까지 한 번에 뛰는 것
2. 0 ~ r 까지 하나씩 뛰는 것 => dp로 저장해서 dp[i-1] + dp[i]로 계산
*/
const solution = (input) => {
  let [n, k] = input.shift().split(" ").map(v => +v);
  let list = input[0].split(" ").map(v => +v);
  let loc = true;

  let dp = new Array(n).fill(0);
  dp[0] = 1;

  for (let r = 1; r < n; r += 1) {
    for (let l = 0; l < r; l += 1) {
      // // l = 0이면 한 번에 뛰는 경우로 계산
      // if (l === 0) {
      //   let tmp1 = (r - l) * (1 + Math.abs(list[r] - list[l]));
      //   // k보다 작은 에너지면 좌표 저장
      //   if (tmp1 > k) loc = false;
      //   else loc = true;

      //   dp[r] = tmp1;
      // } else {
      //   // 아닐 경우에 하나씩 뛰는 경우 계산
      //   if (((r - l) * (1 + Math.abs(list[r] - list[l]))) > k) loc = false;
      //   else loc = true;

      //   let tmp2 = dp[r - 1] + ((r - l) * (1 + Math.abs(list[r] - list[l])));
      //   dp[r] = Math.min(dp[r], tmp2);
      // }
      if (dp[l] && ((r - l) * (1 + Math.abs(list[r] - list[l]))) <= k) {
        dp[r] = 1;
      }
    }

    console.log(dp);
  }

  if (dp[n - 1]) return 'YES';
  else return 'NO';
};

console.log(solution(input));