function input_cal() {

	const readline = require('readline');

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	let input = [];

	rl.on('line', function (line) {
		input.push(line)

		rl.close();

	}).on('close', function () {

		arith_Seq(input)

		process.exit();
	})
}

function arith_Seq(input) {

	const a = input.toString().split(' ');

	console.log((+a[0]) + (+a[1]) * ((+a[2]) - 1));
}

input_cal();