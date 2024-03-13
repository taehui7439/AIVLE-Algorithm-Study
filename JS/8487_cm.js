inputStr = '124 512';

function GCD(str) {

	let input_arr = str.trim().split(' ');

	let x = +(input_arr[0]);
	let y = +(input_arr[1]);

	while (y) {
		let tmp = x % y;

		x = y;
		y = tmp;
	}

	console.log(x);
}

GCD(inputStr);