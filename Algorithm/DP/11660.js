const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");


const solution = (input) => {
  let [n, m] = input[0].split(" ").map(v => +v);
  let field = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // let field = [];
  let ans = "";
  const board = input.slice(1, n + 1).map((str) => str.split(" ").map(Number));

  // 좌표대로 반복
  // 최대 10^6을 10^6번 반복 10^12? 너무 큰데..
  // dp에 어떻게 저장하지?
  // dp[x][y] += dp[x-1][y] + dp[x][y-1] - dp[x-1][y-1]로 저장
  // 그러면 원하는 지역의 합을 구하려면 [x2][y2] - [x1-1][y2] - [x2][y1-1] + [x1-1][y1-1]

  // dp 누적합 만들기
  for (let x = 1; x <= n; x += 1) {
    for (let y = 1; y <= n; y += 1) {
      field[x][y] = board[x - 1][y - 1] + field[x - 1][y] + field[x][y - 1] - field[x - 1][y - 1];
    }
  }

  // 원하는 지역의 누적합 구하기
  for (let i = n + 1; i < input.length; i += 1) {
    let [x1, y1, x2, y2] = input[i].split(" ").map(v => +v);
    let result = field[x2][y2] - field[x1 - 1][y2] - field[x2][y1 - 1] + field[x1 - 1][y1 - 1];
    ans += String(result) + "\n";
  }

  console.log(ans);
};

solution(input);