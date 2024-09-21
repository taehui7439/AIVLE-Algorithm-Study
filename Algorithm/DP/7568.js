const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 이전 방법
// const solution = (input) => {
//   const n = Number(input[0]);
//   const list = input.slice(1).map((e) => e.split(" ").map(v => +v));
//   let order = new Array(n).fill(0);

//   // 각 몸무게, 키에 원래 순서를 추가
//   let index = 0;
//   list.forEach(person => {
//     person.push(index);
//     index += 1;
//   });

//   // sort를 사용해서 정렬
//   list.sort((a, b) => {
//     if (a[0] > b[0] && a[1] > b[1]) return b[0] - a[0];
//   });

//   // 인덱스로 돌면서 앞 사람과 비교해서 몸무게, 키 모두 크면 순위 + 1,
//   // 아닌 경우 순위 그대로 하고 같은 순위 + 1
//   let sameOrder = 1;

//   for (let i = 0; i < n; i += 1) {
//     // 맨 위의 사람을 1등으로 만듬
//     if (i === 0) {
//       order[list[i][2]] = i + 1;
//       continue;
//     }

//     if (list[i - 1][0] > list[i][0] && list[i - 1][1] > list[i][1]) {
//       order[list[i][2]] = order[list[i - 1][2]] + sameOrder;
//       // console.log(`+ sameOrder`);
//       sameOrder = 1;
//     } else if (list[i - 1][0] > list[i][0] || list[i - 1][1] > list[i][1]) {
//       order[list[i][2]] = order[list[i - 1][2]];
//       sameOrder += 1;
//       // console.log(`sameOrder = ${sameOrder}`);
//     }
//   }

//   console.log(order.join(' '));
// };

// 새로운 방법
const solution = (input) => {
  const n = Number(input[0]);
  const list = input.slice(1).map((e) => e.split(" ").map(v => +v));
  let result = [];

  for (let i = 0; i < list.length; i += 1) {
    let grade = 1;
    for (let j = 0; j < list.length; j += 1) {
      if (i !== j) {
        if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) grade += 1;
      }
    }
    result.push(grade);
  }

  console.log(result.join(" "));
};

solution(input);