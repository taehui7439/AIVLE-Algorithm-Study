const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let n = Number(input.shift());
let nums = input.shift().split(' ');

function solution(n, nums) {
	let min_nums = Math.min(...nums);
	let ans = [];

	console.log(1);

	for (let i = 2; i <= min_nums; i += 1) {
		let flag = true;

		// 만약 나머지가 0이 아니면 false, 모두 나머지가 0이면 true이므로 출력
		for (let j = 0; j < n; j += 1) {
			if (nums[j] % i !== 0) {
				flag = false;
				break;
			}
		}

		if (flag) ans.push(i);
	}

	ans.map(v => console.log(v));
}

// solution(n, nums);


function gcd(a, b) {
	while (b !== 0) {
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}

function findGCD(n, arr) {
	let result = arr[0];
	let ans = [];

	for (let i = 1; i < n; i++) {
		result = Math.min(result, gcd(result, arr[i]));

		if (result === 1) { // 만약 GCD가 1이라면, 더 이상 진행할 필요가 없습니다.
			console.log(1);
			return 1;
		}
	}

	for (let i = 1; i <= result; i += 1) {
		if (result % i == 0) ans.push(i);
	}

	ans.map(v => console.log(v));
}

findGCD(n, nums);

// ==========================================

// const fs = require('fs');
// const input = fs.readFileSync("Algorithm/read.txt").toString().trim().split("\n");

// const n = Number(input[0]);
// const nums = input[1].split(' ').map(num => Number(num));

// function solution(n, nums) {
// 	let ans = [];
// 	nums.sort((a, b) => a - b);

// 	// n개수만큼 array만들기
// 	for (let i = 0; i < n; i++) {
// 		let arr = new Array();

// 		// 각 숫자의 공약수 구하기
// 		for (let j = 0; j <= nums[i]; j++) {
// 			if (nums[i] % j === 0) {
// 				arr.push(j);
// 			}
// 		}
// 		ans.push(arr);
// 	}
// 	// 각 숫자의 공약수 중 같은 숫자만 빼서 출력하기
// 	// let common = ans[0].filter(e => ans[1].includes(e));
// 	let common = [];
// 	for (let i = 1; i < n; i++) {
// 		common.push(ans[0].filter(element => ans[i].includes(element)));
// 	}

// 	return common;
// }

// let ans = solution(n, nums);
// ans.map(v => console.log(v));