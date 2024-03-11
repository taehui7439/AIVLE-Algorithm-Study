
input = 'ab*'

function id_validate(inputStr) {
	if (inputStr.length > 20 || isNaN(parseFloat(inputStr))) {
		console.log('I')

		return
	}

	console.log('P')
}

id_validate(input)