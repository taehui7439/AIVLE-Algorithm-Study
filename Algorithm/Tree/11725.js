const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const n = Number(input.shift());
let nodeList = input.map(v => v.split(' ').map(n => +n));

const tree = Array.from({ length: +n + 1 }).map(() => []);
const parentNodes = Array.from({ length: +n + 1 }).fill(null);
const check = Array.from({ length: +n + 1 }).fill(false);

// tree 완성
nodeList.forEach(node => {
  const [start, end] = node;

  tree[start].push(+end);
  tree[end].push(+start);
});

const dfs = node => {
  // node에 check가 되어 있으면 return 아니면 true로 만듬
  // tree를 돌면서 각 node의 child가 check 되어있지 않으면 parentsNode를 node로 선정
  if (check[node]) return;
  check[node] = true;

  tree[node].forEach(child => {
    if (!check[child]) {
      parentNodes[child] = node;

      dfs(child);
    }
  });
};

dfs(1);

let ans = '';

for (let i = 2; i < parentNodes.length; i++) {
  ans += parentNodes[i] + '\n';
}

console.log(ans);