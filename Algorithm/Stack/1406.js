const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [init, n, ...command] = input;
  let stack = init.split('');
  let ans = [];

  // L => 스택에서 하나 빼서 ans에 넣음 (스택에 아무 것도 없으면 무효)
  // D => ans에서 스택으로 넣음 (ans에 아무 것도 없으면 무효)
  // B => 스택에서 하나를 삭제 (스택에 아무 것도 없으면 무효)
  // P => 스택에 문자 추가
  // 반복 끝나면 stack + ans로 합치기

  // for (let i = 0; i < Number(n); i += 1) {
  //   if (command[i][0] === 'P') {
  //     stack.push(command[i][2]);
  //   } else if (command[i][0] === 'L') {
  //     // stack에 아무 것도 없으면 무효
  //     if (stack.length === 0) continue;

  //     let tmp = stack.pop();
  //     ans.push(tmp);
  //   } else if (command[i][0] === 'D') {
  //     if (ans.length === 0) continue;

  //     let tmp = ans.pop();
  //     stack.push(tmp);
  //   } else if (command[i][0] === 'B') {
  //     if (stack.length === 0) continue;

  //     stack.pop();
  //   }
  // }

  command.forEach(comm => {
    const [action, char] = comm.split(' ');

    if (action === 'P') {
      stack.push(char);
    } else if (action === 'L') {
      // stack에 아무 것도 없으면 무효
      if (stack.length > 0) {
        let tmp = stack.pop();
        ans.push(tmp);
      }
    } else if (action === 'D') {
      if (ans.length > 0) {
        let tmp = ans.pop();
        stack.push(tmp);
      }
    } else if (action === 'B') {
      if (stack.length > 0) {
        stack.pop();
      }
    }
  });

  ans = [...stack, ...ans.reverse()];

  return ans.join('')
};

console.log(solution(input));