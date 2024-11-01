const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const [n, m, v] = input[0].split(" ").map(Number);
  const nodes = input.slice(1).map(node => node.split(" ").map(Number));
  let dfsList = [];
  let bfsList = [];
  let dfsCheck = new Array(n).fill(false);
  let bfsCheck = new Array(n).fill(false);

  let nodeList = Array.from(new Array(n), () => []);
  // 각 노드에 연결된 노드를 저장
  for (let i = 0; i < m; i += 1) {
    let [node, connected] = nodes[i];
    nodeList[node - 1].push(connected);
    nodeList[connected - 1].push(node);
  }

  // 오름차순 정렬
  for (let i = 0; i < n; i++) {
    nodeList[i].sort((a, b) => a - b);
  }

  const dfs = (start) => {
    dfsList.push(start);
    dfsCheck[start - 1] = true;

    for (let j = 0; j < nodeList[start - 1].length; j += 1) {
      const nextNode = nodeList[start - 1][j];
      if (!dfsCheck[nextNode - 1]) {
        dfs(nextNode);
      }
    }
  }

  const bfs = (start) => {
    bfsCheck[start - 1] = true;

    const queue = [start];

    while (queue.length > 0) {
      const node = queue.shift();
      bfsList.push(node);

      for (let j = 0; j < nodeList[node - 1].length; j += 1) {
        const nextNode = nodeList[node - 1][j];

        if (!bfsCheck[nextNode - 1]) {
          bfsCheck[nextNode - 1] = true;
          queue.push(nextNode);
        }
      }
    }
  }

  dfs(v);
  bfs(v);

  console.log(dfsList.join(" "));
  console.log(bfsList.join(" "));
}

solution(input);