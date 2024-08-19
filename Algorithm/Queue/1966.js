const fs = require('fs');
const input = fs.readFileSync("Algorithm/read.txt").toString().trim().split("\n");

let total_cnt = Number(input.shift());
arr = input;
arr = arr.map((item) => item.split(" ").map(a => +a));
let ans = '';


for (let i = 0; i < total_cnt; i += 1) {
	let [n, idx] = arr[i * 2];
	let nums = arr[(i * 2) + 1];
	let target = nums[idx];
	let top = "";
	let cnt = 1;


	if (nums.length === 1) {
		ans += 1 + '\n';
		continue;
	}

	while (true) {
		top = nums.shift();
		// 만약 현재 숫자가 가장 크고, 출력 순서를 알고 싶은 숫자 위치가 0이면 cnt 넣고 멈춤
		// 만약 현재 숫자가 가장 크지 않고, 원하는 위치가 0이면 맨 뒤로 보냄
		if (Math.max(...nums) <= top && idx === 0) {
			ans += cnt + '\n';
			break;
		} else if (Math.max(...nums) > top && idx === 0) {
			nums.push(top);
			idx = nums.length - 1;
		} else if (Math.max(...nums) <= top) {
			cnt += 1;
			idx -= 1;
		} else if (Math.max(...nums) > top) {
			nums.push(top);
			idx -= 1;
		}
	}
}

console.log(ans);

// ======================================

// 정렬하고 거기서 원하는 원소의 위치 찾기
// 원하는 원소가 여러 개면 따로 찾기
// 틀린 방식임

// let ansList = "";

// for (let i = 0; i < total_cnt; i++) {
// 	let [n, idx] = arr[i * 2];
// 	let nums = arr[(i * 2) + 1];
// 	let target = nums[idx];

// 	nums = nums.sort((a, b) => b - a);
// 	let ans = nums.indexOf(target) + 1;

// 	let sameNum = nums.filter(v => v === target)

// 	if (sameNum.length > 1) {
// 		ans += (sameNum.length - 1);
// 	}

// 	ansList += ans + '\n';
// }

// console.log(ansList);