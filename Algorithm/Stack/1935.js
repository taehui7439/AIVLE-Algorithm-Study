// 후위 표기식 계산
// 스택을 사용해서 앞부터 넣음
// 숫자가 2개가 되고 그 다음 수식이 오면 계산, 숫자 2개를 pop하고 결과를 삽입
// 이걸 반복

const fs = require('fs');
const input = fs.readFileSync("AIVLE-Algorithm-Study/Algorithm/read.txt").toString().trim().split("\n");

let n = Number(input.shift());
let cmd = input.shift().split("");
let nums = input;
let stack = [];
let change = [];

const calculator = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"*": (a, b) => a * b,
	"/": (a, b) => a / b
}

const operators = ["+", "-", '*', "/"];

function backCal(n, cmd, nums) {
	for (let i = 0; i < n; i += 1) {
		change[String.fromCharCode(i + 65)] = nums[i];
	}

	cmd = cmd.map((item) => operators.includes(item) ? item : change[item]);

	for (let i = 0; i < cmd.length; i += 1) {
		let str = cmd[i]

		// && (cmd[i - 1].match(/[0-9]/)) && (cmd[i - 2].match(/[0-9]/))
		if (i >= 2) {
			if (str.match(/[\+\-\*\/]/)) {
				let back = Number(stack.pop());
				let front = Number(stack.pop());

				let calFunction = calculator[str];
				str = calFunction(front, back);
			}
		}
		stack.push(str)
	}

	console.log(stack[0].toFixed(2));
}

backCal(n, cmd, nums);