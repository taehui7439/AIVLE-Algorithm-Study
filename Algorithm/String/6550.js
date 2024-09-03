const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let ans = [];

  input.forEach((item) => {
    let [sStr, tStr] = item.split(' ');

    // 문자열을 배열화
    const queue = [...sStr];

    // 다른 방법으로 큐를 사용
    // t에 대해서 돌면서 s의 문자열을 shift
    for (alpha of tStr) {
      if (alpha === queue[0]) {
        queue.shift();
      }
    }

    // // 글자의 인덱스를 저장하여 커서보다 뒤에 있는지 확인
    // for (let i = 0; i < sStr.length; i += 1) {
    //   let tmp = tStr.indexOf(sStr[i], cursor)
    //   // console.log(tmp, cursor);
    //   if (tmp >= cursor) {
    //     cursor = tmp;
    //   } else {
    //     // 커서보다 앞에 있으면 no
    //     ans.push('No');
    //     isInclude = false;
    //     break;
    //   }
    // }


    // 만약 다 통과하면 yes
    let result = queue.length === 0 ? "Yes" : "No";
    ans.push(result);
  });

  ans.forEach((item) => { console.log(item) });
};

solution(input);