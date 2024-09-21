const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const p = Number(input[0]);
  let ans = [];

  for (let i = 0; i < p; i += 1) {
    let cnt = 0;
    const line = input[i + 1].split(" ").map(v => +v);

    // 1번째부터 마지막까지 앞에 큰 수가 몇 개가 있는지 카운트
    for (let j = 2; j <= 20; j += 1) {
      for (let k = 1; k < j; k += 1) {
        if (line[k] > line[j]) {
          cnt += 1;
        }
      }
    }
    ans.push(`${line[0]} ${cnt}`);
  }

  console.log(ans.join('\n'));
};

solution(input);