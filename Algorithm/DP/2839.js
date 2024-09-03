const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let n = Number(input);
  let ans = 0;

  while (n > 0) {
    let result = 0;
    let remain = 0;

    // 5로 나누어 떨어지면 계산해서 리턴
    if (n % 5 === 0) {
      ans += n / 5;
      return ans;
    }

    // 아니면 3을 빼고 ans + 1
    n -= 3;
    ans += 1;

    if (n < 0) {
      return -1;
    }
  };

  return ans;
};
console.log(solution(input));