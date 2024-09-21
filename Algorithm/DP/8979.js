const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const [n, k] = input[0].split(" ").map(v => +v);
  const nations = input.slice(1).map((e) => e.split(" ").map(v => +v));
  let sameOrder = 1;

  // 메달 수 정렬
  nations.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    else if (b[2] !== a[2]) return b[2] - a[2];
    else return b[3] - a[3];
  });

  // 등수가 같은 경우 계산
  nations[0][4] = 1;
  for (let i = 1; i < n; i += 1) {
    if (nations[i - 1][1] === nations[i][1] && nations[i - 1][2] === nations[i][2] && nations[i - 1][3] === nations[i][3]) {
      nations[i][4] = nations[i - 1][4];
      sameOrder += 1;
    } else {
      nations[i][4] = nations[i - 1][4] + sameOrder;
      sameOrder = 1;
    }
  }

  console.log(nations.find((e) => e[0] === k)[4]);
};

solution(input);