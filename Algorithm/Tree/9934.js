const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const n = Number(input.shift());
const numList = input[0].split(' ').map(v => +v);

// 트리 생성
const tree = Array.from({ length: (numList.length) + 1 }).map(() => []);
const levels = Array.from({ length: (numList.length) + 1 }).map(() => []);

const makeTree = (numList, level) => {
  if (numList.length === 0) return;

  const mid = Math.floor(numList.length / 2);
  levels[level].push(numList[mid]);

  makeTree(numList.slice(0, mid), level + 1);
  makeTree(numList.slice(mid + 1), level + 1);
};

makeTree(numList, 0);

levels.forEach(level => {
  console.log(level.join(' '));
});
