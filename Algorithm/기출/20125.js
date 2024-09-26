const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, ...board] = input;
  n = Number(n);

  let findHead = false;
  let ans = "";

  // 심장 위치 찾기
  let heartLoc = [];
  for (let i = 0; i < n; i += 1) {
    // 맨 처음 발견한 * = 머리 => 머리 밑이 심장
    if (!findHead && board[i].indexOf('*') !== -1) {
      ans += `${i + 2} ${board[i].indexOf('*') + 1}\n`;
      heartLoc = [i + 1, board[i].indexOf('*')];
      findHead = true;
    }
  }

  // 팔 길이 계산
  for (let j = 0; j < n; j += 1) {
    // 심장을 중심으로 팔의 길이 측정
    // *이 시작하는 인덱스, 끝나는 인덱스 계산 => 심장 위치 알고 있으므로 팔 길이 계산
    if (j === heartLoc[0]) {
      let armStart = board[j].indexOf('*');
      let armEnd = 0;

      // * 길이 계산
      // 맨 뒤 부터 돌면서 *가 나오면 끝냄
      for (let k = board[j].length - 1; k >= 0; k -= 1) {
        if (board[j][k] === '*') {
          armEnd = k;
          break;
        }
      }

      ans += `${heartLoc[1] - armStart} ${armEnd - heartLoc[1]} `;
    }
  };

  // 허리 길이 계산
  let waistLength = 0;
  let legStart = 0;
  // 심장을 시작으로 세로로 내려가면서 *인지 확인
  // _ 발견하면 끝냄
  for (let k = heartLoc[0] + 1; k < n; k += 1) {
    if (board[k][heartLoc[1]] === '*') {
      waistLength += 1;
    } else if (board[k][heartLoc[1]] === '_') {
      // 다리 시작하는 구간 저장
      legStart = k;
      break;
    }
  }
  ans += `${waistLength} `;

  // 다리 길이 계산
  let leftLeg = 0;
  let rightLeg = 0;
  // 다리 시작하는 포인트를 미리 찾아 놓고 포인트부터 시작
  for (let k = legStart; k < n; k += 1) {
    // 왼쪽 다리
    if (board[k][heartLoc[1] - 1] === '*') {
      leftLeg += 1;
    }

    if (board[k][heartLoc[1] + 1] === '*') {
      rightLeg += 1;
    }
  }

  ans += `${leftLeg} ${rightLeg}`;

  console.log(ans);
}

solution(input);