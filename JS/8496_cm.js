// n = 7
n = 11;
// input_int = [[475, 170], [28, 95], [506, 8361], [51, 3988], [2, 977], [607, 793], [49, 847]]
input_int = [[998, 2607], [9422, 3358], [806, 80622], [2848, 4153], [398, 180],
[867, 22219], [6514, 806], [246, 9462], [906, 43046], [2592, 289], [8, 8486]];

function find_minimun_dist(n, input_int) {

	let min_dist = Infinity;
	let best_idx = -1;

	for (let i = 0; i < n; i++) {
		let dist_sum = 0;

		for (let j = 0; j < n; j++) {
			dist_sum += Math.abs(input_int[i][0] - input_int[j][0]) * input_int[j][1];
		}

		console.log(`${input_int[i]}의 총 합: ${dist_sum}, i = ${i}`)

		if (dist_sum < min_dist) {
			min_dist = dist_sum;
			best_idx = i;
		}
	}

	console.log(best_idx + 1);
}

find_minimun_dist(n, input_int);