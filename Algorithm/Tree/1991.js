const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const n = Number(input.shift());
const nodeList = input.map(v => v.split(' '));

const tree = {};
// const check = Array.from({ length: +n }).fill(false);
let result = "";

nodeList.forEach(node => {
  const [ele, left, right] = node;

  tree[ele] = [];
  tree[ele].push(left);
  tree[ele].push(right);
})

const preOrder = node => {
  if (node === ".") return;
  const [left, right] = tree[node];

  result += node;
  preOrder(left);
  preOrder(right);
}

const inOrder = node => {
  if (node === ".") return;
  const [left, right] = tree[node];

  inOrder(left);
  result += node;
  inOrder(right);
}

const postOrder = node => {
  if (node === ".") return;
  const [left, right] = tree[node];

  postOrder(left);
  postOrder(right);
  result += node;
}

preOrder("A");
result += '\n';
inOrder("A");
result += '\n';
postOrder("A");

console.log(result);