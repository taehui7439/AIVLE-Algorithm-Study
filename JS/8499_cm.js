function cnt(n) {
	let ans = Array(10).fill(0);

	for (let i = 1; i < n + 1; i++) {
		let sp = [...String(i)];

		for (let j = 0; j < sp.length; j++) {
			ans[sp[j]] += 1;
		}
	}

	console.log(ans.join(' '));
}

cnt(321);