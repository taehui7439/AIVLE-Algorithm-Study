const fs = require('fs');
const input = fs.readFileSync("AIVLE-Algorithm-Study/Algorithm/read.txt").toString().trim().split('\n');
// '/dev/stdin'
let [n, ...comms] = input;
let deque = [];
let ans = [];
n = Number(n);

function makeDeque(n, comms, deque, ans) {
	for (let i = 0; i < n; i += 1) {
		let [cmd, num] = comms[i].split(" ");

		if (cmd === "push_front") {
			deque.unshift(num);
		} else if (cmd === "push_back") {
			deque.push(num);
		} else if (cmd === 'pop_front') {
			if (deque.length > 0) {
				ans.push(deque.shift());
			} else {
				ans.push(-1);
			}
		} else if (cmd === 'pop_back') {
			if (deque.length > 0) {
				ans.push(deque.pop());
			} else {
				ans.push(-1);
			}
		} else if (cmd === 'size') {
			ans.push(deque.length);
		} else if (cmd === 'empty') {
			if (deque.length > 0) {
				ans.push(0);
			} else {
				ans.push(1);
			}
		} else if (cmd === 'front') {
			if (deque.length > 0) {
				ans.push(deque[0]);
			} else {
				ans.push(-1);
			}
		} else if (cmd === 'back') {
			if (deque.length > 0) {
				ans.push(deque[deque.length - 1]);
			} else {
				ans.push(-1);
			}
		}
	}

	console.log(ans.join("\n"));
}

makeDeque(n, comms, deque, ans);