const { exit } = require("process");

const n = 5;

arr = new Array(n).fill(0);
arr[1] = 1
arr[2] = 2

if (n <= 2) {
	console.log(arr[n]);
	exit();
}

for (let i = 3; i < n + 1; i++) {
	arr[i] = arr[i - 1] + arr[i - 2]
}

console.log(arr[n] % 796796)
