// n = 8;
// m = 3;
// arr = [[1, 1, 3], [1, 4, 5], [1, 5, 6], [1, 8, 4], [3, 1, 2], [4, 6, 1], [7, 2, 2,], [7, 8, 2]];

n = 8;
m = 3;
arr = [[1, 1, 3], [1, 2, 2], [2, 3, 4], [2, 4, 1], [3, 5, 5], [3, 6, 2], [4, 7, 6], [4, 8, 7]];

// 이어진 m개의 굴을 정함. => n번 반복됨
// 그 다음 나오는 점수를 계산
// 초마다 나오는 두더지의 위치, 점수 확인
// 그 중에 가장 높은 점수의 두더지 선택

function solution(n, m, arr) {
	let sum = 0;
	// 처음부터 하나씩 굴을 선택하면서 연속된 m개의 굴을 지정
	for (let i = 0; i < n; i += 1) {
		let selected = [((i) % 8) + 1, ((i + 1) % 8) + 1, ((i + 2) % 8) + 1]; // 1, 2, 3 => 8부터하면 8, 1, 2가 되야함

		console.log(`정한 굴 = ${selected}`);

		let ans = 0;
		let sec = 1;
		let maxL = 0;

		// arr 반복하면서 같은 순간에 나오는 두더지 확인
		for (let j = 0; j < arr.length; j += 1) {
			// 만약 동시에 나온 두더지 있으면 location, score에 넣음, cnt + 1해서 넘길 인덱스 계산
			if (arr[j][0] == sec) {
				let location = arr[j][1];
				let score = arr[j][2];
				if (selected.includes(location)) {
					maxL = Math.max(maxL, score);
				}
				// 정한 위치에 두더지가 나왔는지 확인해서 배열에 넣은 뒤 큰 값 확인 후, 점수를 더함
			} else {
				// sec와 다르면 ans 계산
				ans += maxL;
				maxL = 0;
				sec = arr[j][0];
				j -= 1;
			}
		}

		ans += maxL;
		sum = Math.max(ans, sum);

		console.log(`점수 = ${sum}`);
	}

	return;
};

solution(n, m, arr);