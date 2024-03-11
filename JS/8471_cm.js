input = 28

function octalHexa(input) {
	let octal = input.toString(8)
	let hexa = input.toString(16)

	console.log(octal, hexa.toUpperCase())
}

octalHexa(input);