const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

/*
남 => 배수
여 => 받은 수 중심으로 좌우 대칭 최대 구간 / 대칭이 없으면 받은 수만
*/
const solution = (input) => {
  let [n, switchList, studentNum, ...orderList] = input;

  switchList = switchList.split(" ").map(v => +v);
  n = Number(n);

  for (let i = 0; i < +studentNum; i += 1) {
    let order = orderList[i].split(" ").map(v => +v);

    // 남학생인 경우
    // 배수의 스위치 변경
    if (order[0] === 1) {
      let cnt = Math.floor(switchList.length / order[1]);

      for (let j = 0; j < cnt; j += 1) {
        switchList[(order[1] * (j + 1)) - 1] = switchList[(order[1] * (j + 1)) - 1] === 1 ? 0 : 1;
      }

      // console.log(switchList);
    } else if (order[0] === 2) {
      // 여학생인 경우
      // 원래 위치의 스위치 변경
      switchList[order[1] - 1] = switchList[order[1] - 1] === 1 ? 0 : 1;

      // 반복하면서 주위의 숫자가 같으면 변경, 다르면 끝냄
      for (let k = 1; k < order[1]; k += 1) {
        if (switchList[order[1] - 1 - k] === switchList[order[1] - 1 + k]) {
          switchList[order[1] - 1 - k] = switchList[order[1] - 1 - k] === 1 ? 0 : 1;
          switchList[order[1] - 1 + k] = switchList[order[1] - 1 + k] === 1 ? 0 : 1;
        } else break;
      }

      // console.log(switchList);
    }
  }

  let result = [];
  while (switchList.length > 0) {
    result.push(switchList.splice(0, 20).join(" "));
  }
  console.log(result.join("\n"));
};

solution(input);