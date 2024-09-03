const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, k] = input.shift().split(" ").map(v => +v);
  let list = input.shift().split(" ").map(v => +v);

  let max = 0;
  let left = 0;
  let oddCnt = 0;

  for (let right = 0; right < n; right += 1) {
    if (list[right] % 2 !== 0) {
      oddCnt += 1;
    }

    while (oddCnt > k) {
      if (list[left] % 2 !== 0) {
        oddCnt -= 1;
      }
      left += 1;
    }

    max = Math.max(max, right - left + 1 - oddCnt);

    // console.log(`right = ${right} oddCnt = ${oddCnt} left = ${left}`);
  }

  console.log(max);
};

solution(input);