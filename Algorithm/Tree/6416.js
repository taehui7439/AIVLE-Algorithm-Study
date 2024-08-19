function isTree(edges) {
	let indegree = new Map();
	let u, v;

	function initIndegree(node) {
		if (!indegree.has(node)) {
			indegree.set(node, 0);
		}
	}

	for (let [u, v] of edges) {
		initIndegree(u);
		initIndegree(v);
		indegree.set(v, indegree.get(v) + 1);
	}

	let nodeCnt = indegree.size;
	let rootCnt = 0;
	let leafCnt = 0;

	for (let [node, degree] of indegree) {
		if (degree === 0) rootCnt++;
		else if (degree === 1) leafCnt++;
		else if (degree >= 2) return `Case ${testCase} is not a tree`;
	}

	// 나무(tree)의 조건: 하나의 루트 노드가 있고, 나머지 모든 노드가 하나의 부모 노드만을 가지는 구조
	if ((rootCnt === 1 && leafCnt === nodeCnt - 1) || indegree.size === 0) {

		return `Case ${testCase} is a tree`;
	} else {
		return `Case ${testCase} is not a tree`;
	}
}

const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
// 정보 전처리
// [[[6, 8], [5, 3], [5, 2], [6, 4], [5, 6]], [[8, 1], [7, 3], [6, 2], [8, 9], [7, 5], [7, 4], [7, 8], [7, 6]], [[3, 8], [6, 8], [6, 4], [5, 3], [5, 6], [5, 2]]]
// 위처럼 나오도록 만듬
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let cases = [];
let currCase = [];

for (let line of input) {
	// -1 -1 만나면 종료
	if (line === '-1 -1') break;

	// 0 0 만나면 케이스가 끝났으므로 cases에 추가
	if (line.trim() === '0 0') {
		if (currCase.length > 0) {
			cases.push(currCase);
			currCase = [];
		}
		// 0 0 아니면 넘김
		continue;
	}

	const numbers = line.split('  ').map(nums => nums.split(' ').map(Number));
	currCase.push(...numbers);
}

if (currCase.length > 0) {
	cases.push(currCase);
}

let testCase = 1;

for (let i = 0; i < cases.length; i += 1) {
	let ord = edges[i];
	c
	console.log(isTree(ord));
	testCase += 1;
}


[
	[[6, 8], [5, 3], [5, 2], [6, 4], [5, 6]],
	[[8, 1], [7, 3], [6, 2], [8, 9], [7, 5], [7, 4], [7, 8], [7, 6]],
	[[3, 8], [6, 8], [6, 4], [5, 3], [5, 6], [5, 2]]
]