const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

/*
3 1 4 3 2

3
3 + 1
3 + 1 + 4
3 + 1 + 4 + 3
3 + 1 + 4 + 3 + 2

합 = 배열 요소의 합
*/

const n = Number(input.shift());
let arr = input.map(Number);
let calList = [];
let ans = 0;

// 반복하면서 누적합을 배열에 넣기
for (let i = 0; i < n; i += 1) {
	ans += arr[i];
	calList.push(ans);
}

let result = calList.reduce((acc, cur) => { return acc + cur; }, 0)
console.log(result);