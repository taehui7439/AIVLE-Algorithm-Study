const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [n, ...wordsList] = input;
  n = Number(n);

  let checkWords = Array.from({ length: n }, () => false);
  let alphaList = [];
  let ans = [];

  for (let i = 0; i < n; i += 1) {
    let splitWord = wordsList[i].split(" ");

    // 각 단어의 첫 글자 단축키 설정
    for (let j = 0; j < splitWord.length; j += 1) {
      let choice = splitWord[j];
      let first = choice[0].toLocaleLowerCase();

      if (!alphaList.includes(first)) {
        alphaList.push(first);
        checkWords[i] = true;
        splitWord[j] = `[${choice[0]}]` + choice.slice(1);
        ans.push(splitWord.join(" "));
        break;
      }
    }

    // 첫 글자가 설정 안된 경우 알파벳 하나씩 확인
    if (!checkWords[i]) {
      for (let k = 0; k < splitWord.length; k += 1) {
        let word = splitWord[k];

        for (let l = 0; l < word.length; l += 1) {
          let alp = word[l].toLocaleLowerCase();

          if (!alphaList.includes(alp)) {
            alphaList.push(alp);
            checkWords[i] = true;
            splitWord[k] = word.slice(0, l) + `[${word[l]}]` + word.slice(l + 1);
            ans.push(splitWord.join(" "));
            break;
          }
        }

        if (checkWords[i]) break;
      }
    }

    // 단축키 설정이 모두 안된 경우, 그대로 추가
    if (!checkWords[i]) {
      ans.push(splitWord.join(" "));
    }
  }

  console.log(ans.join("\n"));
};

solution(input);