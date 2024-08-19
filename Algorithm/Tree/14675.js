const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// 0, 'utf-8'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const n = Number(input.shift());
const treeNodes = input.splice(0, n - 1);
const m = Number(input.shift());
const question = input

// 트리 만들기
const tree = Array.from({ length: n + 1 }).map(() => 0);

treeNodes.forEach(node => {
  let [start, end] = node.split(' ').map(v => +v);
  tree[start] += 1;
  tree[end] += 1;
})

// 질문에 답하기
// t = 1 => 단절점?
// t = 2 => 단절선?
// 단절점 = 해당 정점을 제거하였을 때, 그 정점이 포함된 그래프가 2개 이상으로 나뉘는 경우, 이 정점을 단절점이라 한다.
// 단절선 = 해당 간선을 제거하였을 때, 그 간선이 포함된 그래프가 2개 이상으로 나뉘는 경우, 이 간선을 단절선이라 한다.
// 만약 노드를 삭제한 결과, 두 개로 나뉨 => 단절점
// 만약 간선을 삭제한 결과, 두 개로 나뉨 => 단절선
// 그럼 간선은 전부 단절선 아닌가?????

let ans = "";

question.forEach(q => {
  let [kind, num] = q.split(' ').map(v => +v);

  if (kind === 1) {
    // 단절점인가
    if (tree[num] > 1) {
      ans += "yes" + "\n";
    } else {
      ans += "no" + "\n"
    }
  }
  else if (kind === 2) {
    ans += "yes" + "\n";
  }
})

console.log(ans);