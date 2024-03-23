function stair(n, k) {
	let loc = n;
	let target = k;

	let dist = target - loc;
	let cnt = Math.floor(dist / 3);
	let remaining = dist % 3;

	if (remaining === 0) {
		console.log(cnt);
		return;
	}

	if (remaining == 1) {
		cnt += 3;
	} else cnt += 2;

	console.log(cnt);
}

stair(23, 145);