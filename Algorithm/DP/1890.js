// const fs = require('fs');
// const readFileSyncAddress = 'Algorithm/read.txt';
// const baek = "0, 'utf-8'";
// const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// // 해결 못함
// const solution = (input) => {
//   let n = Number(input.shift());
//   let field = input.map(v => v.split(" ").map(b => +b));
//   let dp = Array.from(Array(n), () => Array(n).fill(0));
//   dp[0][0] = field[0][0];
//   let ans = 0;

//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//       if (dp[i][j] !== 0) {
//         let move = field[i][j];
//         dp[i][j] += move;

//         // 아래로 이동하거나 오른쪽으로 이동만 함
//         // 값이 6이 되면 도착한 것
//         if (i + move < n) {
//           dp[i + move][j] += move;
//         }

//         if (j + move < n) {
//           dp[i][j + move] += move;
//         }
//         console.log(dp);
//       }
//     }
//   }

//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//       if (dp[i][j] === 6) {
//         ans += 1;
//       }
//     }
//   }

//   return ans;
// };

// console.log(solution(input));


const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let n = Number(input.shift());
  let field = input.map(v => v.split(" ").map(b => +b));

  // DP 배열 초기화
  let dp = Array.from(Array(n), () => Array(n).fill(BigInt(0)));
  dp[0][0] = 1; // 시작점에서의 경로 수는 1

  // DP 테이블 채우기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let move = field[i][j]; // 현재 칸의 이동 거리
      if (move === 0) continue;

      // 아래로 이동
      if (i + move < n) {
        dp[i + move][j] += BigInt(dp[i][j]);
      }

      // 오른쪽으로 이동
      if (j + move < n) {
        dp[i][j + move] += BigInt(dp[i][j]);
      }
      console.log(dp);
    }
  }

  // 오른쪽 아래 칸의 경로 수 반환
  return (dp[n - 1][n - 1]).toString();
};

console.log(solution(input));