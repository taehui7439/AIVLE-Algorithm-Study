const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let n = Number(input.shift());
  let list = input.shift().split(" ").map(v => +v);

  let dp = new Array({ length: n }).fill(0);

  let left = 0;
  let right = 0;

  for (right = 0; right < n; right += 1) {
    dp[right] = list[right];

    for (left = 0; left < right; left += 1) {
      if (list[right] > list[left]) {
        dp[right] = Math.max(dp[right], dp[left] + list[right]);
      }
    }
  }
  return Math.max(...dp);
};

console.log(solution(input));