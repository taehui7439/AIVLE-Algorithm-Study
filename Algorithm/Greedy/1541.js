function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
let sentence = input.shift();
let ans = 0;

// 만약 +만 있으면 그대로 계산
if (sentence.indexOf("-") === -1) {
  sentence = sentence.split("+").map(v => +v);
  ans = sentence.reduce((acc, v) => { return acc + v });
  console.log(ans);
  process.exit();
}

// 아니면 - 기준으로 나눠서 계산한 뒤에 합침
if (sentence.indexOf("-") !== -1) {
  sentence = sentence.split("-")
  ans = sentence[0].split("+").map(v => +v).reduce((acc, v) => { return acc + v });

  for (let i = 1; i < sentence.length; i += 1) {
    ans -= sentence[i].split("+").map(v => +v).reduce((acc, v) => { return acc + v });
  }

  console.log(ans);
}

// =============================

// const input = inputTemplate()[0];
// let ans = 0;

// // - 있으면 기준으로 나눠서 계산
// // 없으면 그대로 계산
// if (input.indexOf("-") === -1) {
//   let splitInput = input.split('+').map(Number);
//   ans = splitInput.reduce((acc, v) => { return acc + v });
// }
// if (input.indexOf("-") !== -1) {
//   let splitInput = input.split('-');
//   let sumParts = (part) => part.split("+").map(Number).reduce((acc, v) => { return acc + v });
//   ans = sumParts(splitInput.shift());

//   for (let i = 0; i < splitInput.length; i += 1) {
//     ans -= sumParts(splitInput.shift());
//   }
// }

// console.log(ans);