function game(field) {
	let ans = 0;
	let field_s = [];
	let map_s = [];
	let map = [
		'0 1 0 1 0 1 0 1',
		'1 0 1 0 1 0 1 0',
		'0 1 0 1 0 1 0 1',
		'1 0 1 0 1 0 1 0',
		'0 1 0 1 0 1 0 1',
		'1 0 1 0 1 0 1 0',
		'0 1 0 1 0 1 0 1',
		'1 0 1 0 1 0 1 0'
	];

	for (let i = 0; i < 8; i++) {
		let row = map[i].split(' ').filter(item => item !== ' ');
		map_s.push(row);
	}

	for (let i = 0; i < 8; i++) {
		let row = [...map[i]];
		field_s.push(row);
	}

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (field_s[i][j] == 'F' && map_s[i][j] == '0') {
				ans += 1;
			}
		}
	}

	console.log(ans);
	return ans;
}

field = [
	'TFFTTFTT', 'FTFTFTTF', 'TTTFTFTT', 'TTTTFFTT',
	'TFTTFTFT', 'TTTFFTTF', 'TFTFTFTT', 'TFTFTTFT'
];

let tmp = '0 t';

console.log(tmp.split(' '));

game(field);