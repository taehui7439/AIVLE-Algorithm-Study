const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");


const solution = (input) => {
  let [n, m] = input.shift().split(" ").map(v => +v);
  let field = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let points = [];
  let ans = [];

  // let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  // table 분리, field 생성
  for (let i = 0; i < n; i += 1) {
    let line = input.shift().split(" ").map(v => +v);

    for (let j = 0; j < n; j += 1) {
      field[i + 1][j + 1] = line[j];
    }
  }

  // // x+1, y+1로 field 생성
  // for (let i = 0; i < n; i += 1) {
  //   for (let j = 0; j < n; j += 1) {
  //     field[i + 1][j + 1] = table[i][j];
  //   }
  // }

  // // 좌표 분리
  // for (let i = 0; i < m; i += 1) {
  //   let point = input.shift().split(" ").map(v => +v);
  //   points.push(point);
  // }

  // 좌표대로 반복
  // 최대 10^6을 10^6번 반복 10^12? 너무 큰데..
  // dp에 어떻게 저장하지?
  // dp[x][y] += dp[x-1][y] + dp[x][y-1] - dp[x-1][y-1]로 저장
  // 그러면 원하는 지역의 합을 구하려면 [x2][y2] - [x1-1][y2] - [x2][y1-1] + [x1-1][y1-1]

  // dp 누적합 만들기
  for (let x = 1; x <= n; x += 1) {
    for (let y = 1; y <= n; y += 1) {
      field[x][y] = field[x][y] + field[x - 1][y] + field[x][y - 1] - field[x - 1][y - 1];
    }
  }

  // 원하는 지역의 누적합 구하기
  for (let i = 0; i < m; i += 1) {
    let [x1, y1, x2, y2] = input.shift().split(" ").map(v => +v);
    let result = field[x2][y2] - field[x1 - 1][y2] - field[x2][y1 - 1] + field[x1 - 1][y1 - 1];
    ans.push(result);
  }

  ans.forEach((num) => {
    console.log(num);
  });
};

solution(input);