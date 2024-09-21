const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = "0, 'utf-8'";
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  const expression = [...input[0]];
  let stack = [];
  let operStack = [];
  let ans = "";
  let operation = ["+", '-', '*', '/'];
  let parentheses = ["(", ")"];

  // 알파벳이면 stack
  // 수식이면 operStack
  // 괄호면 무시
  let regex = /a-zA-Z/;

  expression.forEach(char => {
    // 알파벳 조건
    console.log(`${char}, ${regex.test(char)}`);
    if (regex.test(char)) {
      stack.push(char);
      console.log('stack push')
    } else if (operation.includes(char)) {
      operStack.push(char);
      console.log('operStack push')
    }
  });


  ans = stack.join("")
  let oper = operStack.join("");

  console.log(ans, oper);
};

solution(input);