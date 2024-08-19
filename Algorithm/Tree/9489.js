function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate()
let ans = [];

// 한 번 돌아가는 방식을 반복함
// 맨 앞 노드를 루트로 둠
// 그 다음부터 앞의 값과 2 이상 차이나면
