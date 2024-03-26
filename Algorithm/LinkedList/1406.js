// 각 L, D, B, P에 대한 함수를 만들어서 작동하도록 만듬
// 커서 = 인덱스인데, 맨 앞과 맨 뒤는 인덱스를 어떻게 계산?
// 인덱스를 변수로 정하고 따로 계산
// 입력 3자리 => 인덱스 = 3. 
// 인덱스 === 0 => 맨 앞, 인덱스 === 3 => 맨 뒤

// 커서 왼쪽 추가
// 인덱스가 맨 뒤 => push
// 인덱스가 맨 앞 => unshift
// 나머지         => 인덱스에 삽입

// 커서 왼쪽 삭제
// 인덱스가 맨 뒤 => 인덱스 - 1 삭제
// 인덱스가 맨 앞 => 무시
// 나머지         => 인덱스 - 1 삭제

// 시간 초과...


function editor(l, n, comm) {
	let idx = l.length;
	ll = [...l];

	for (let i = 0; i < n; i++) {
		if (comm[i][0] === 'L') {
			if (idx !== 0) idx -= 1;
			continue;
		}

		if (comm[i][0] === 'D') {
			if (idx !== ll.length) idx += 1;
			continue;
		}

		if (comm[i][0] === 'B') {
			[idx, ll] = B(idx, ll);
			continue;
		}

		if (comm[i][0] === 'P') {
			[idx, ll] = P(idx, ll, comm[i][1]);
			continue;
		}
	}


	console.log(ll.join(''));
}

function B(idx, l) {
	if (idx === l.length) {
		l.pop()
		idx -= 1;
	} else if (idx !== 0) {
		l.splice(idx - 1, 1);
		idx -= 1;
	}

	return [idx, l];
}

function P(idx, l, elem) {
	if (idx === l.length) {
		l.push(elem);
	} else if (idx === 0) {
		l.unshift(elem);
	} else {
		l.splice(idx, 0, elem);
	}
	idx += 1;

	return [idx, l];
}



// 백준 입력
// const fs = require('fs');
// const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// 로컬 입력
const fs = require('fs');
const readFileSyncAddress = 'AIVLE-Algorithm-Study/Algorithm/LinkedList/read.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');


let [listStr, n, ...commList] = input;
n = +n;
command = [];

for (let i = 0; i < n; i++) {
	command.push(commList[i].split(' '))
}

editor(listStr, n, command)


// -------------------------------------------------------------

let lStack = listStr.split("");
let rStack = [];


for (let i = 2; i < 2 + n; i++) {
	let [cmd, value] = commList[i].split(" ");
	if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
	else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
	else if (cmd === "B") lStack.pop();
	else if (cmd === "P") lStack.push(value);
}

let ans = lStack.join("");
ans += rStack.reverse().join("");

console.log(ans);