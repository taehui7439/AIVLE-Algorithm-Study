const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 노드를 하나씩 늘리면서 반복
// 선택한 노드에서 6리터를 계산해서 더 적은 값 저장
// 최소 2부터 시작
// 그 다음 남은 리터를 어떻게 분배할지 계산


const n = +(input.shift());
const distance = input.shift().split(' ').map(v => +v);
const price = input.shift().split(' ').map(v => +v);

let currentPrice = price[0];
let cost = 0;

for (let i = 0; i < n - 1; i++) {
  cost += currentPrice * distance[i];
  // 만약 지금 가격보다 다음 주유소 가격이 더 싸면 그 가격으로 설정
  if (currentPrice > price[i + 1]) currentPrice = price[i + 1];
}

console.log(String(cost));