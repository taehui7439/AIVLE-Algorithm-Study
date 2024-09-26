const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, newScore, p] = input[0].split(" ").map(v => +v);
  let scoreList = input[1] ? input[1].split(' ').map(Number) : [];

  // if (n === 0 && p > 0) {
  //   console.log(1);
  //   return;
  // }

  // 점수 리스트 길이를 끊어야 함.

  // scoreList.push(newScore);
  // scoreList.sort((a, b) => { return b - a });

  // let rank = 0;
  // let sameRankCount = 0;

  // for (let i = 0; i < n + 1; i += 1) {
  //   if (i > 0 && scoreList[i] === scoreList[i - 1]) {
  //     sameRankCount += 1; // 같은 점수의 개수 증가
  //   } else {
  //     rank += sameRankCount + 1; // 새로운 점수의 순위 계산
  //     sameRankCount = 0; // 리셋
  //   }

  //   // console.log(rank);

  //   // 새 점수가 있는 위치에서의 순위 확인
  //   if (scoreList[i] === newScore) {
  //     if (rank > p) {
  //       console.log(-1);
  //     } else if (rank === p && scoreList[p - 1] === newScore) {
  //       // 점수가 마지막 등수와 같고, 마지막 점수와 같을 때
  //       console.log(-1);
  //     } else {
  //       console.log(rank);
  //     }

  //     return; // 순위를 찾았으므로 종료
  //   }
  // }


  // 새로운 방법
  if (n < p) {
    scoreList.push(newScore);
    scoreList.sort((a, b) => b - a);
  } else { // 리스트 꽉 차면
    if (newScore > scoreList[scoreList.length - 1]) {
      scoreList[scoreList.length - 1] = newScore;
      scoreList.sort((a, b) => b - a);
    } else {
      console.log(-1);
      return;
    }
  }

  for (let i = 0; i < scoreList.length; i++) {
    if (scoreList[i] === newScore) {
      console.log(i + 1);
      return;
    }
  }
};

solution(input);