const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 로프를 정렬
// ans = 최소로 잡고 각

/*
20, 15, 10

20 = 20
20, 15 = 30
20, 15, 10 = 30
*/

// 데이터 분리
let n = Number(input.shift());
let ropes = input.map(a => +a);
let ans = [];

// 정렬
ropes = ropes.sort((a, b) => b - a);

// 배열에 각 계산 넣기
// 나열해보니 규칙이 나옴
// 그리디는 나열을 해봐야 아는구나

for (let i = 0; i < n; i += 1) {
	ans.push(ropes[i] * (i + 1));
}

console.log(Math.max(...ans));