const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

// 10 9 6 4 4 3 2
// 10 3 2 => 13
// 9 6 4  => 15
// 4 => 4

// 3 3 2 2

const n = parseInt(input.shift());
const prices = input.map(v => +v);
prices.sort((a, b) => b - a);

let totalCost = 0;
for (let i = 0; i < n; i++) {
  if ((i + 1) % 3 !== 0) {
    totalCost += prices[i];
  }
}

console.log(totalCost);