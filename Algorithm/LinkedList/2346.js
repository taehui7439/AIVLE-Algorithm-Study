// const fs = require('fs');
// const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

// const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// const n = parseInt(input[0]);

// const nums = input[1].split(' ').map(Number);

n = 5;
nums = [3, 2, 1, -3, -1];

let ans = [];
let idx = 0;
let i = 0;

// queue 배열 초기화
let queue = Array.from({ length: n }, (_, index) => index + 1);

// 1을 처음 뺌
ans.push(queue[0]);
queue.splice(idx, 1);

// 다음 
// 2 3 4 5   idx = 0, i = 0
// 2 3 5     i = 1, idx = 3
//

while (queue.length > 0) {

	idx = (idx + nums[i]) % queue.length;
	ans.push(queue[idx - idx]);
	queue.splice(idx - 1, 1);

	i += 1;
}


console.log(`${ans.join(' ')}`);