const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, m] = input[0].split(" ").map(v => +v);
  let field = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  let ans = "";
  const board = input.slice(1, n + 1).map((str) => str.split(" ").map(Number));

  // dp 누적합 만들기
  for (let x = 1; x <= n; x += 1) {
    for (let y = 1; y <= m; y += 1) {
      field[x][y] = board[x - 1][y - 1] + field[x - 1][y] + field[x][y - 1] - field[x - 1][y - 1];
    }
  }

  let k = Number(input[n + 1]);

  // 원하는 지역의 누적합 구하기
  for (let i = n + 2; i < input.length; i += 1) {
    let [x1, y1, x2, y2] = input[i].split(" ").map(v => +v);
    let result = field[x2][y2] - field[x1 - 1][y2] - field[x2][y1 - 1] + field[x1 - 1][y1 - 1];
    ans += String(result) + "\n";
  }

  console.log(ans.trim());
};

solution(input);