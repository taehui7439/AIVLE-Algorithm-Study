function noDirectedGraph(n, m, nodeLocation) {

	// let arr = [];

	// for (let i = 0; i < n; i++) {
	// 	arr.push(Array(n).fill(0));
	// }

	let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));

	for (let i = 0; i < m; i++) {
		let xLoc = nodeLocation[i][0] - 1;
		let yLoc = nodeLocation[i][1] - 1;

		arr[xLoc][yLoc] = 1;
		arr[yLoc][xLoc] = 1;
	}

	for (let i = 0; i < n; i++) {
		let r = '';

		for (let j = 0; j < n; j++) {
			r += arr[i][j] + ' ';
		}
		console.log(r.trim());
	}
}

n = 3;
m = 3;
l = [[1, 2], [1, 3], [2, 3]];

noDirectedGraph(n, m, l);