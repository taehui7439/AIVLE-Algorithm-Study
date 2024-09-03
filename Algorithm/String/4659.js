const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let ans = [];
  let isAccept = false;
  let textList = ['a', 'e', 'i', 'o', 'u'];


  const textPush = (text, isAccept) => {
    if (isAccept) {
      ans.push(`<${text}> is acceptable`);
    } else {
      ans.push(`<${text}> is not acceptable`);
    }
  };

  for (let j = 0; j < input.length; j += 1) {
    let item = input[j];

    // end면 반복 끝
    if (item === "end") return ans;

    if (!textList.some(ele => item.includes(ele))) {
      console.log(item, '모음 포함 불가')
      isAccept = false;
      textPush(item, isAccept);
      continue;
    }

    for (let i = 0; i < item.length; i += 1) {
      // 모음 or 자음이 3개 연속이면 끝
      if (i <= item.length - 2) {
        console.log(item, '3개 연속', item[i], item[i + 1], item[i + 2]);

        if (item[i] === item[i + 1] === item[i + 2]) {
          isAccept = false;
          textPush(item, isAccept);
          break;
        }
      }

      // 2개 연속오면 안되지만 e, o는 허용
      if (i <= item.length - 1) {
        console.log(item, '2개 연속', item[i], item[i + 1]);
        if (item[i] === item[i + 1] && item[i] !== 'e' && item[i] !== 'o') {
          isAccept = false;
          textPush(item, isAccept);
          break;
        }
      }
    }
    // isAccept = true;
    textPush(item, isAccept);
    console.log(ans);
  };

  console.log(ans);

  ans.forEach((item) => console.log(item));
};

solution(input);