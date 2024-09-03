const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, ...words] = input;
  n = Number(n);

  // set으로 만들면?
  let wordList = [...new Set(words)];

  wordList = wordList.sort((a, b) => {
    // 길이가 다르면 정렬
    if (a.length != b.length) {
      return a.length - b.length;
    } else {
      // 길이가 같으면 사전순 정렬
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  for (let word of wordList) {
    console.log(word);
  }
};

solution(input);