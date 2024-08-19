const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

/*
7
8
6
9
10

10, 9, 8, 7, 6
10  8, 6, 4, 2 합 => 30

정렬해서 계산하는 게 가장 나은 방법
정렬 => 각 계산 결과 합
*/

let n = Number(input.shift());
let arr = input.map(Number);
let ans = 0;

// 정렬
arr = arr.sort((a, b) => b - a);

// 계산 결과 합하기
for (let i = 0; i < n; i += 1) {
	let cal = arr[i] - ((i + 1) - 1);

	if (cal > 0) {
		ans += cal;
	}
}

console.log(ans);