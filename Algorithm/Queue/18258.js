const fs = require("fs");
const readFileSyncAddress = "AIVLE-Algorithm-Study/Algorithm/read.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 문제: 시간 복잡도가 O(n^2)이 되면 안되는데, 이를 만족하면서 
const n = Number(input.shift());
let que = [];
let head = 0;
let tail = 0;
let ans = [];

for (item of input) {
	comm = item.split(" ")[0];

	// 요소 추가
	if (comm === "push") {
		que.push(item.split(" ")[1]);
		tail += 1;
	} else if (comm === "front") {
		// tail과 head가 같으면 요소가 없으므로 -1 출력
		if (tail === head) ans.push(-1);
		else ans.push(que[head]);
	} else if (comm === "back") {
		// 위와 마찬가지
		if (tail === head) ans.push(-1);
		else ans.push(que.at(-1));
	} else if (comm === "size") {
		ans.push(tail - head);
	} else if (comm === "empty") {
		if (tail === head) ans.push(1);
		else ans.push(0);
	} else if (comm === "pop") {
		// head를 증가시켜 배열에서 없는 요소로 취급하는 방법
		if (head < tail) {
			ans.push(que[head]);
			head += 1;
		} else ans.push(-1);
	}
}

console.log(ans.join("\n"));