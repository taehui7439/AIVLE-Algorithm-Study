const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const personList = input[1].split(" ").map(Number);
  let order = [];

  // 자기보다 큰 사람이 왼쪽에 몇 명 있는지 기억
  // 맨 뒤부터 돌면서 숫자에 맞추어 넣으면?
  // order를 앞에서 돌면서 더 큰 숫자가 있는지 확인해서 맞는 위치를 찾는 방법

  for (let i = n - 1; i >= 0; i -= 1) {
    if (!order.length) {
      order.push(i + 1);
      // console.log("order push", order);
    } else {
      // console.log('앞 부분 = ', order.slice(0, personList[i]), '뒷 부분 = ', [i + 1, ...order.slice(personList[i])]);
      order = order.slice(0, personList[i]).concat([i + 1, ...order.slice(personList[i])]);
    }
  }

  // for (let i = n - 1; i >= 0; i -= 1) {
  //   // 아무도 없으면 그냥 넣음
  //   if (!order.length) {
  //     order.push(i + 1);
  //     console.log("order push", order);
  //   } else {
  //     // 아닐 경우 둘면서 더 큰 숫자가 있는지 확인
  //     let idxCnt = 0;
  //     for (let j = 0; j < order.length; j += 1) {
  //       if (order[j] > (i + 1)) {
  //         idxCnt += 1;
  //         console.log(`idxCnt=${idxCnt}`);
  //       }
  //       // 만약 idxCnt가 personList[i]와 같으면 해당 위치에 넣음
  //       // 아니면 그 전까지 배열을 잘라서 원하는 숫자와 그 뒤의 숫자들을 넣어서 합친다?
  //       if (idxCnt === personList[i]) {
  //         order.splice(j + 1, 0, i + 1);
  //         console.log(`element = ${i + 1}, order=${order}`);
  //         break;
  //       }
  //     }
  //     // 만약 위치가 맞지 않다면 order의 끝에 추가
  //     if (idxCnt < personList[i]) {
  //       order.unshift(i + 1);
  //     }
  //   }
  // }

  console.log(order.join(" "));
}

solution(input);

