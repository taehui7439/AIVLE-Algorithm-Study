const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

let n = +(input.shift());
const ans = [];

for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
        n /= i;
        ans.push(i);
    }

    if (n === 1) break;
}

ans.forEach((num) => console.log(num));