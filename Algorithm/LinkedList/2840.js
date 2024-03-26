function wheel(n, k, comm) {
	const deque = Array(n).fill("?");
	const alpha = Array(27).fill(0);

	for (let i = 0; i < k; i++) {
		const [s1, dt] = comm[i];

		// deque에 반영
		for (let j = 0; j < s1; j++) {
			deque.push(deque.shift());
		}

		// 이미 들어있는데, 같은 문자가 아닐 경우,
		// 없지만, 다른 곳에 있는 문자일 경우에 ! 출력
		if ((deque[0] !== '?' && deque[0] != dt) || (deque[0] === '?' && alpha[dt.charCodeAt(0)] === '1')) {
			return "!"
		}
		else {
			deque.shift();
			deque.unshift(dt);
			alpha[dt.charCodeAt(0)] = 1;
		}
	}

	const tmp = deque.shift();
	deque.push(tmp);
	let ll = deque.reverse()
	return ll.join('');
}

// 백준 입력
// const fs = require('fs');
// const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 로컬 입력
const fs = require('fs');
const readFileSyncAddress = 'AIVLE-Algorithm-Study/Algorithm/LinkedList/read.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const ans = [];

for (let i = 1; i < k + 1; i++) {
	if (input[i] !== '') {
		const [s1, dt] = input[i].split(' ');
		ans.push([parseInt(s1), dt]);
	}
}

console.log(wheel(n, k, ans));