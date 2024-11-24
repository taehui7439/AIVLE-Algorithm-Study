const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let word = input[0];
  const len = word.length;
  let min = Infinity;

  // 처음 a의 길이 확인해서 뒤로 이어 붙이기
  let checkALength = word.match(/a/g)?.length;
  // 문자열 뒤에 반복할 갯수만큼 붙임
  word += word.slice(0, checkALength - 1);

  for (let i = 0; i < len; i += 1) {
    const window = word.slice(i, i + checkALength);
    min = Math.min(min, window.match(/b/g)?.length || 0);
  }

  console.log(min);
}

solution(input);