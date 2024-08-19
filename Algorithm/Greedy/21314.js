function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
console.log(input);
/*
1. m 다음 k가 오는 경우
2. m 오는 경우
3. k 오는 경우
4. m 다음 m 오는 경우


큰 수 구하기 - 스택

m => 스택에 넣음
k => 5 추가, 스택 길이 = m 개수만큼 0 추가

작은 수 구하기 - 스택

m => 1 추가, 그 다음도 m이면 와서 10 추가
k => 5 추가
*/

const findMax = (input) => {
  let stack = [];
  let num = '';

  for (let i = 0; i < input.length; i += 1) {
    const item = input[i];

    // m이면 스택에 넣음
    // k이면 5 추가
    if (item === 'M') {
      stack.push(item);
      continue;
    }
    if (item === 'K') {
      if (stack.length) {
        num += '5';

        // stack의 길이 = m의 갯수만큼 0이 추가됨
        for (let j = 0; j < stack.length; j += 1) {
          num += '0';
        }
      } else {
        // stack의 길이가 0 = m의 갯수가 0이므로 5추가
        num += '5';
      }
      stack = [];
    }
  }

  // stack에 남아 있음 = m만 남음
  if (stack.length) {
    stack.forEach(_ => num += '1');
  }

  return num;
};

const findMin = (input) => {
  let stack = [];
  let num = '';

  for (let i = 0; i < input.length; i += 1) {
    const item = input[i];

    // m이면 스택에 넣음
    // k이면 5 추가
    if (item === 'M') {
      stack.push(item);
      continue;
    }
    if (item === 'K') {
      if (!stack.length) {
        num += '5';
      } else {
        num += '1';

        for (let i = 0; i < stack.length - 1; i += 1) {
          num += '0';
        }
        num += '5';
        stack = [];
      }
    }
  }

  if (stack.length) {
    num += '1';
    for (let i = 0; i < stack.length - 1; i += 1) {
      num += '0';
    }
  }

  return num;
};

const solution = (input) => {
  const inputSplited = input[0].split('');
  const max = findMax(inputSplited);
  const min = findMin(inputSplited);
  console.log(max);
  console.log(min);
};

solution(input);