// push, pop, size, empty, top 기능
// n = 명령 수
// 10의 5제곱 => n의 제곱이면 안됨


// 백준 입력
const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : 'AIVLE-Algorithm-Study/Algorithm/read.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 입력 받아서 커멘드의 숫자를 int로 만들어줌
let [n, ...command] = input
let stack = [];
let top = 0;
let ans = "";

// 내장함수를 이용한 스택은 시간초과가 남
// 왜???????
// 다른 로직을 고쳐도 시간초과 뜸
// 그러면 arr을 만드는 과정이 시간초과인가?
// forEach와 push가 이에 해당될 수 있으므로 이 배열을 없애고 사용

// command.forEach(cmd => {
// 	let [op, val] = cmd.split(" ");

// 	if (op === 'push') {
// 		val = Number(val);
// 		arr.push([op, val]);
// 	} else {
// 		arr.push([op]);
// 	}
// });



for (let i = 0; i < n; i += 1) {
	// push면, ans에 push
	// top이면, 가장 뒤의 요소 출력
	// size이면, 배열 사이즈 출력
	// empty면, 비었으면 1, 아니면 0 출력
	// pop면, 비었으면 -1, 아니면 가장 뒤 요소 뺀 뒤, 출력
	const cmd = command[i].split(" ")[0];

	console.log(`cmd: ${cmd}`);

	if (cmd === 'push') {
		const result = command[i].split(" ")[1];
		stack[top] = result;
		top += 1;
	} else if (cmd === 'top') {
		if (top === 0) {
			ans += -1 + " ";
		} else {
			ans += stack[top - 1] + " ";
		}
	} else if (cmd === 'size') {
		ans += (stack.length) + " ";
	} else if (cmd === 'empty') {
		if (stack.length === 0) {
			ans += 1 + " ";
		} else ans += 0 + " ";
	} else if (cmd === 'pop') {
		if (stack.length === 0) {
			ans += -1 + " ";
		} else {
			ans += (stack.pop()) + " ";
			top -= 1;
		}
	}
}

console.log(ans.split(' ').join('\n'));


// --------------------------------------------

// let top = 0;
// let stack = [];

// for (let i = 0; i < n; i += 1) {
// 	let cmd = arr[i][0];

// 	switch (cmd) {
// 		case 'push':
// 			stack[top] = arr[i][1];
// 			top += 1;
// 			break;
// 		case 'pop':
// 			if (top) {
// 				result = Number(stack.splice(-1));
// 				console.log(result);
// 				top -= 1;
// 			} else {
// 				result = -1;
// 				console.log(result);
// 			}
// 			break;
// 		case 'top':
// 			result = top ? stack[top - 1] : -1;
// 			console.log(result);
// 			break;
// 		case 'empty':
// 			result = top ? 0 : 1;
// 			console.log(result);
// 			break;
// 		case 'size':
// 			result = top;
// 			console.log(result);
// 			break;
// 		default:
// 			break;
// 	}
// }