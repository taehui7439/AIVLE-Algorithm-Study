const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  let ballList = [...input[1]];

  // 처음부터 공을 움직일 경우
  const countMoves = (ballList, ball, target) => {
    let check = false;
    let cnt = 0;

    for (let i = 0; i < ballList.length; i += 1) {
      if (ballList[i] === ball) {
        check = true;
      }
      if (check && ballList[i] === target) cnt += 1;
    }

    return cnt;
  }

  const countReverseMoves = (ballList, ball, target) => {
    let check = false;
    let cnt = 0;

    for (let i = ballList.length - 1; i >= 0; i -= 1) {
      if (ballList[i] === ball) {
        check = true;
      }
      if (check && ballList[i] === target) cnt += 1;
    }

    return cnt;
  }

  const cntRed = Math.min(countMoves(ballList, 'B', 'R'), countReverseMoves(ballList, 'B', 'R'));
  const cntBlue = Math.min(countMoves(ballList, 'R', 'B'), countReverseMoves(ballList, 'R', 'B'));

  console.log(Math.min(cntRed, cntBlue));
}

solution(input);