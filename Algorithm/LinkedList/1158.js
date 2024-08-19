const fs = require('fs');
const readFileSyncAddress = "AIVLE-Algorithm-Study/Algorithm/read.txt"
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim();

const [n, cnt] = input.split(' ').map(v => +v);
let ans = [];
let idx = 0;

// queue 배열 초기화
let queue = Array.from({ length: n }, (_, index) => index);

while (queue.length > 0) {
	// 3을 전진하고 해당 숫자를 삭제, 
	idx = (idx + cnt - 1) % queue.length;
	ans.push(queue[idx] + 1);
	queue.splice(idx, 1);
}

console.log(`<${ans.join(', ')}>`);