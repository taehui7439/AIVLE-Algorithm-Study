// 
// 1 4 2 5 3



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


while (queue.length > 0) {

	idx = (idx + nums[i] + queue.length - 1) % queue.length;
	ans.push(queue[idx]);
	queue.splice(idx, 1);

	i += 1;
}


// // nums 배열을 순회하면서 요소를 제거
// for (let move of nums) {
// 	if (queue.length === 0) break; // queue가 비었으면 중단

// 	// move를 사용하여 다음 인덱스 계산
// 	// 음수 이동을 처리하기 위해 queue.length를 더하고, 결과를 queue.length로 나눔
// 	idx = (idx + move + queue.length * 100) % queue.length; // idx가 음수가 되지 않도록 충분히 큰 수를 곱함

// 	ans.push(queue[idx]);
// 	queue.splice(idx, 1);
// }


console.log(`${ans.join(' ')}`);


// ------------------------------------------------------------
