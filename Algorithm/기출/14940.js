const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(" ").map(Number);
  const field = input.slice(1).map(line => line.split(" ").map(Number));
  let ans = Array.from(new Array(n), () => new Array(m).fill(0));
  let visited = Array.from(new Array(n), () => new Array(m).fill(false));

  let destination = []; // 목적지 좌표

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  // 목적지의 위치 확인
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (field[i][j] === 2) {
        destination = [i, j];
      }
    }
  }

  // bfs 함수
  const bfs = (destination) => {
    const [x, y] = destination;
    visited[x][y] = true;

    const queue = [];
    queue.push(destination);

    while (queue.length) {
      const cur = queue.shift();
      const [x, y] = cur;

      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 범위를 넘지 않고, 필드에 0이 아니고, 방문하지 않은 경우 실행
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && field[nx][ny] && !visited[nx][ny]) {
          ans[nx][ny] = ans[x][y] + 1;
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  // bfs 실행
  bfs(destination);

  ans.forEach((line, i) => {
    line.forEach((num, j) => {
      // 갈 수 있는 땅 중 닿지 못한 땅은 -1로 표시
      if (!num && field[i][j] === 1) {
        ans[i][j] = -1;
      }
    })

    console.log(line.join(' '));
  })
};

solution(input);