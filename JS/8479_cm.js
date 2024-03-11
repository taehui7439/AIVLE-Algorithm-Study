
// input = [list(map(str, sys.stdin.readline().rstrip().split(' '))) for _ in range(2)]
// cnt, height = input

// std = 160

// for h in height:
//     if (std >= int(h)):
//         print(f'I {h}')
//         sys.exit()

// print('P')


cnt = 3;
inputStr = '180 170 159';

function getHeight(cnt, inputStr) {
	std = 160

	inputStr = inputStr.split(' ');

	for (let i = 0; i < cnt; i++) {
		if (std >= +inputStr[i]) {
			console.log(`I ${inputStr[i]}`);
			return;
		}
	}

	console.log('P');
	return;
}

getHeight(cnt, inputStr)