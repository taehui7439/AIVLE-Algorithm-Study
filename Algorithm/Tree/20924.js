function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate();
const [n, root] = input.shift().split(' ').map(v => +v);

/*
1. 나무 기둥 길이
2. 가장 긴 가지 길이

dfs 쓰면 가지 길이 확인 가능
기둥 길이 => 트리의 길이?
*/

const solution = (n, root) => {
  let tree = Array.from({ length: n + 1 }, () => []);
  const check = Array.from({ length: n + 1 }).fill(false);
  let giga = 0;
  let poleLength = 0;
  let maxBranchLength = 0;
  let totalLength = 0;

  // 트리 생성
  input.forEach((part) => {
    const [node, next, length] = part.split(' ').map(v => +v);
    tree[node].push([next, length]);
    tree[next].push([node, length]);
  });

  console.log(tree);

  // 기둥 길이 게산
  const dfs1 = (node) => {
    if (tree[node].length > 2) {
      giga = node;
      return poleLength;
    } else {
      poleLength += tree[node][0][1];

    }
  };

  // const dfs = (node, parent) => {
  //   let longest = 0;
  //   let secLongest = 0;

  //   // check[node] = true;
  //   // if (!check[node]) return;

  //   // 기둥 길이를 재기 위해 노드 길이 2 이상, giga 0이면 그 위치를 giga로 설정 / 아니면 poleLength + 1
  //   console.log(`${node} - ${tree[node]} - ${branchL[node]}`);

  //   console.log(`기둥 길이=${poleLength}`);

  //   tree[node].forEach((neighbor, index) => {
  //     if (neighbor === parent) return;

  //     const length = branchL[node][index]; // 현재 가지 길이
  //     const branch = dfs(neighbor, node) + length; // 그 밑까지 포함한 총 가지 길이

  //     console.log(`neighbor=${neighbor}, len=${length}, branch=${branch}`);

  //     // 가장 긴 가지, 두 번째 가지 비교
  //     if (branch > longest) {
  //       secLongest = longest;
  //       longest = branch;
  //     } else if (branch > secLongest) {
  //       secLongest = branch;
  //     }
  //   });

  //   maxBranchLength = Math.max(maxBranchLength, longest);
  //   console.log(`maxBranchLength=${maxBranchLength}`);

  //   return longest;
  // };

  // totalLength = dfs(root, -1);

  // console.log(dfs1(root, 0), maxBranchLength - poleLength)
  console.log(dfs1(root));
};

solution(n, root);