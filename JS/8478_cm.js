
input = '2 1 5'

function timeSpend(input) {
	inputList = input.split(' ')
	target = +inputList[2]
	remem = +inputList[0]
	forget = +inputList[1]

	ans = (target - (1 * forget) / (remem - forget))

	if (((target - (1 * forget)) % (remem - forget)) > 0) {
		ans += 1
	}

	console.log(ans)
}

timeSpend(input)