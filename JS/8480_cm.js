inputInt = 102830

function chargeMoney(input) {
	cnt = 0;
	coinList = [10, 50, 100, 500, 1000, 5000, 10000, 50000]
	coinList.sort((a, b) => b - a)

	for (let i = 0; i < 8; i++) {
		cnt += Math.floor(input / coinList[i]);

		input -= Math.floor(input / coinList[i]) * coinList[i]
	}

	console.log(cnt);
}

chargeMoney(inputInt);