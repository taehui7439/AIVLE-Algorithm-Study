function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}
const input = inputTemplate();

/*
하나의 노드를 정하면, 그 노드의 밑으로 길이를 전부 더해서 길이 구하기?
노드 수 = 10^4
만약 자식 노드가 2개 있으면 계산함
그럼 노드로 만들면 자식 노드 갯수를 어케 구하지?
*/

const solution = (input) => {
  const n = input[0][0];
  const tree = new Map();

  // 트리 생성
  for (let i = 1; i < n + 1; i += 1) {
    const [parent, child, weight] = input[i];
    if (!tree.has(parent)) tree.set(parent, []);
    tree.get(parent).push({ node: child, weight: weight });
  }

  // 자식 노드가 2개 이상이면 dfs돔
  const dfs = (node, parent) => {
    let maxDistance = 0;
    let farthestNode = node;

    for (const { node: child, weight: weight } of (tree.get(node) || [])) {
      // 부모와 자식이 같지 않으면 
      if (child != parent) {
      }
    }
  };
};

console.log(solution(input));