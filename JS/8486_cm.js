inputInt = 5

function circle(n) {

	let num = n ** 2 * 3.14

	int_part = parseInt(num)
	dec_part = num - int_part

	if (dec_part != 0) {
		print(num)
		return;
	}

	print(int_part)
}