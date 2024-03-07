const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = [];

rl.on('line', function (line) {
	input.push(line);

	rl.close();

}).on('close', function () {

	beforeC(input);

	process.exit();
})


function beforeC(arr) {

	const inputString = str(arr)
	const parted = inputString.split(' ');
	const idx = parted.indexOf('c');

	console.log(parted.slice(0, idx + 1).join(' '));
}
