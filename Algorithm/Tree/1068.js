function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
const n = Number(input.shift());
const line = input.shift().split(' ').map(v => +v);
const num = Number(input.shift());
const tree = Array.from({ length: n }, () => []);
const visited = Array.from({ length: n }).fill(false);
let cnt = 0;
let root = 0;

// v가 -1이면 루트노드, 아니면 일반노드
// 0 => 1, 0 => 2, 1 => 3, 1 => 4

line.forEach((v, i) => {
  if (v !== -1) {
    tree[v].push(i);
  } else {
    root = i;
    return;
  }
})

const dfs = (node) => {
  if (root === num) return 0;

  if (!tree[node]) {
    cnt += 1;
    return;
  }

  tree[node].forEach(nodeNum => {
    if (nodeNum === num) {
      if (tree[node].length === 1) cnt += 1;
    }
    dfs(nodeNum);
  });
  return cnt;
};

console.log(dfs(root)); 