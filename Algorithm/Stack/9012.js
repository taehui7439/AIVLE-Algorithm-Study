const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : 'AIVLE-Algorithm-Study/Algorithm/read.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 문자열 길이 50 => O 제곱도 가능하지 않나
// 아 문자열이 여러 개니까 안됨...

t = input.shift();
let stack = [];

for (let i = 0; i < t; i += 1) {
	let vps = input[i].split('');
	let last = vps.length;
	let top = 0;

	// 괄호를 stack에 하나씩 저장 -> ()로 닫히면 stack에서 삭제
	// 마지막에 뭔가 남아있으면 no, 아니면 yes

	for (let j = 0; j < last; j += 1) {
		let elem = vps.pop();
		stack[top] = elem;


		// 스택 길이가 2보다 크면 괄호가 ()맞는지 확인하고 맞으면 삭제
		if (last >= 2) {
			if (stack[top] === '(' && stack[top - 1] === ')') {
				stack.splice(-2, 2);
				if (top === 1) {
					top = 0;
				} else {
					top -= 1;
				}
				// console.log("() 삭제");
				// console.log(`stack: ${stack}`)
			} else { top += 1; }
		}
	}

	// 만약 stack에 뭔가 남으면 no
	// if (stack.length !== 0) ans += "NO" + " ";
	// else if (stack.length === 0) ans += "YES" + " ";
	// console.log(`last stack: ${stack}, len: ${stack.length}`)

	if (stack.length !== 0) console.log("NO");
	else if (stack.length === 0) console.log("YES");
}

// console.log(ans.split(' ').join('\n'));

// ----------------------------------------------

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const len = inputs.shift();
const result = [];

for (let i = 0; i < len; i++) {
	let cnt = 0;

	for (let s of inputs[i]) {
		cnt += s === "(" ? 1 : -1;

		if (cnt < 0) break;
	}

	result.push(cnt === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'));