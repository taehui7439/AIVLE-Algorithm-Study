const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let isGroupWord = true;
  let cntGroupWord = 0;

  let n = Number(input.shift())
  let words = input;

  // 단어들 반복
  for (let i = 0; i < n; i += 1) {
    let alpha = [];
    select = words[i];
    isGroupWord = true;

    // 글자 반복
    for (let j = 0; j < select.length; j += 1) {
      let alp = select[j];

      // 만약 alpha에 없는 글자면 추가
      if (alpha.indexOf(alp) === -1) {
        alpha.push(alp);

      } else {
        // 있다면 인덱스 확인해서 맨 뒤에 있는지 확인
        if (alpha.indexOf(alp) !== alpha.length - 1) {
          isGroupWord = false;
          break;
        }
      }
    }

    if (isGroupWord) {
      cntGroupWord += 1;
    }
  }

  return cntGroupWord;
};

console.log(solution(input));