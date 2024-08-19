const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
let [n, k] = input.shift().split(' ').map(v => +v);
const coinList = input.map(v => +v).sort((a, b) => b - a)
let ans = 0;

for (const coin of coinList) {
  ans += Math.floor(k / coin);
  k %= coin;
}

console.log(ans);


// let kLen = k.toString().length;

// for (let i = 0; i < kLen; i++) {
//   let lastNumMod = k % 10

//   // console.log(`k = ${k}, lastNum = ${lastNumMod}`);

//   if (lastNumMod < 5) {
//     ans += lastNumMod;
//   } else {
//     ans += (Math.floor(lastNumMod / 5)) + (lastNumMod % 5);
//   }

//   k = Math.floor(k / 10)
// }

// console.log(ans);