const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let result = [0, 0];
  let cur = 2;
  let n = Number(input);

  while (cur <= n) {
    // 1을 빼는 경우
    result[cur] = result[cur - 1] + 1;

    // 3을 나누는 경우
    if (cur % 3 === 0) {
      result[cur] = Math.min(result[cur], result[cur / 3] + 1);
    }
    // 2를 나누는 경우
    if (cur % 2 === 0) {
      result[cur] = Math.min(result[cur], result[cur / 2] + 1);
    }
    cur += 1;
  }

  return result[n];
};

console.log(solution(input));