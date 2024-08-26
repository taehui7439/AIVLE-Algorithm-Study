function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();

/*
1. r, b의 처음 좌표 찾기
2. 4방향 돌면서 움직일 수 있는지 확인 - 연속으로 움직일 수 있으면 1번으로 카운트
3. 만약 움직이다가 구멍 찾으면 종료 - b가 움직인 좌표가 구멍인지 아닌지 확인

풀지 못한 이유
1. 구멍 위치를 안찾아서 비교를 못함
2. 구슬이 이동한 다음, 구멍에 빠졌는지 확인하는 조건이 없음
3. bfs, dfs를 풀 때, queue를 같이 사용하는 것이 좋다는 걸 기억하기
*/

const solution = (input) => {
  let [n, m] = input.shift().split(' ').map(v => +v);
  let inputParted = input.map(v => v.split(''));
  let red = [];
  let blue = [];
  let o = [];
  let cnt = 0;
  let ans = -1;

  // r, b의 처음 좌표 확인
  for (let i = 0; i < inputParted.length; i += 1) {
    if (inputParted[i].indexOf('R') !== -1) {
      red = [i, inputParted[i].indexOf('R')];
    }
    if (inputParted[i].indexOf('B') !== -1) {
      blue = [i, inputParted[i].indexOf('B')];
    }
    if (inputParted[i].indexOf('O') !== -1) {
      o = [i, inputParted[i].indexOf('O')];
    }
  }

  // 4방향 확인 => 움직이기, 연속으로 있으면 1번으로 간주
  // 구멍있으면 들어감 => b 구멍으로 들어가는지 확인
  // r, b의 초기 좌표 입력
  // 횟수 or -1 출력

  let dirX = [0, 1, 0, -1];
  let dirY = [1, 0, -1, 0];
  const queue = [[...red, ...blue, 0]];
  const visited = new Set();
  // 초기 위치 방문에 추가
  visited.add(`${red[0]},${red[1]},${blue[0]},${blue[1]},${cnt}`)

  while (queue.length && ans === -1) {
    const [rx, ry, bx, by, cnt] = queue.shift();

    // 최대 10번
    if (cnt > 10) return -1;

    // 모든 방향 탐색
    for (let j = 0; j < 4; j += 1) {
      let newRx = rx;
      let newRy = ry;
      let newBx = bx;
      let newBy = by;

      // r, b가 구멍에 빠졌는지 확인
      let rHole = false;
      let bHole = false;

      // console.log('시작 좌표: ', newRx, newRy, newBx, newBy, cnt);

      // 빨간 공 이동
      while (inputParted[newRx + dirX[j]][newRy + dirY[j]] !== '#' && inputParted[newRx][newRy] !== 'O') {
        newRx += dirX[j];
        newRy += dirY[j];

        if (newRx === o[0] && newRy === o[1]) {
          rHole = true;
          break;
        }

        // console.log('빨간 이동 중', newRx, newRy);
      }

      // console.log('red 이동', newRx, newRy);

      // 파란 공 이동
      while (inputParted[newBx + dirX[j]][newBy + dirY[j]] !== '#' && inputParted[newBx][newBy] !== 'O') {
        newBx += dirX[j];
        newBy += dirY[j];

        if (newBx === o[0] && newBy === o[1]) {
          bHole = true;
          break;
        }
      }

      // 파란 구슬이 빠졌다면 실패
      if (bHole) continue;

      // 빨간 구슬만 빠졌다면 정답
      if (rHole) {
        ans = cnt + 1;
        break;
      }

      // console.log('blue 이동', newBx, newBy);

      const key = `${newRx},${newRy},${newBx},${newBy}`;
      // 방문하지 않았으면 추가
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([newRx, newRy, newBx, newBy, cnt + 1]);
      }
    }
  }

  return ans;
};

console.log(solution(input));