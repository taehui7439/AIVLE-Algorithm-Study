const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [cnt, ...cases] = input;
  cnt = Number(cnt);
  let ans = [];

  cases.forEach((item) => {
    let result = 1;
    let div = 1;
    let [n, m] = item.split(' ');
    n = Number(n);
    m = Number(m);

    // m부터 n번 동안 숫자를 곱함
    // n, m 같으면 1
    if (n === m) {
      ans.push(1);
      console.log("1 출력");
    } else {
      for (let i = n; i > 0; i -= 1) {
        result *= m;
        m -= 1;
      }

      for (let j = n; j > 0; j -= 1) {
        div *= n;
        n -= 1;
      }

      result = Math.round(result / div);
      console.log(`${result} 출력`);
      ans.push(result);
    }
  });

  ans.forEach((item) => { console.log(item) });
};

solution(input);