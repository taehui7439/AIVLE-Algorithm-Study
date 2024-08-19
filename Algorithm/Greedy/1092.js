function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();

const crane = Number(input.shift());
const craneWeight = input.shift().split(' ').map((v) => +v);
const box = Number(input.shift());
const boxWeight = input.shift().split(' ').map((v) => +v);

const solution = (craneWeight, boxWeight, box, crane) => {
  let index = 0;
  let ans = 0;

  // 박스 무게가 무거운 것부터 크래인 개수만큼 가져와서 옮길 수 있는지 확인
  boxWeight = boxWeight.sort((a, b) => b - a);
  craneWeight = craneWeight.sort((a, b) => b - a);
  // const len = Math.floor(box / crane) + 1;

  // 크레인 가장 큰 값보다 박스 무게값이 크면 -1 출력
  if (craneWeight[0] < boxWeight[0]) return -1;

  while (boxWeight.length) {
    // 크래인의 무게 반복
    for (let i = 0; i < crane; i += 1) {
      // 박스의 무게 반복
      for (let j = 0; j < box; j += 1) {
        // 만약 크래인이 옮길 수 있으면 박스에서 삭제
        if (craneWeight[i] >= boxWeight[j]) {
          boxWeight.splice(j, 1);
          break;
        }
      }
    }
    ans += 1;
  }

  // // 크래인 개수만큼 가져와서 확인하는 반복문
  // for (let i = 0; i < len; i += 1) {
  //   const boxes = boxWeight.slice(index, index + crane);

  //   console.log(boxes);

  //   // 크래인 무게보다 박스 무게가 더 큰지 확인
  //   boxWeightReverse.forEach((weight, index) => {
  //     console.log(weight, index);
  //     if (weight < craneWeightReverse[index]) return -1;
  //   });

  //   // 마지막에 인덱스 추가, ans 추가
  //   index += crane
  //   ans += 1;
  // }

  return ans;
};

console.log(solution(craneWeight, boxWeight, box, crane));