input_int = 99

function isprime(n) {
	let cnt = new Array(n + 1).fill(true);
	cnt[0] = false;
	cnt[1] = false;

	for (let i = 2; i < n + 1; i++) {
		if (cnt[i]) {
			let j = 2;

			while ((i * j) <= n) {
				cnt[i * j] = false;
				j += 1;
			}
		}
	}

	return cnt;
}

arr = isprime(input_int);
let ans = 0;

for (let k = 0; k < arr.length; k++) {
	if (arr[k]) {
		ans += 1;
	}
}

console.log(ans);