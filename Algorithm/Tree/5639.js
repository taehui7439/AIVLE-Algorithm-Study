function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate().map(v => +v);

class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }

  insert(v) {
    // 다음 숫자가 지금보다 작으면 left
    if (v < this.value) {
      if (!this.left) {
        this.left = new Node(v);
      } else {
        this.left.insert(v);
      }
    } else {
      // 다음 숫자가 지금보다 크면 right
      if (!this.right) {
        this.right = new Node(v);
      } else {
        this.right.insert(v);
      }
    }
  }
}

const postOrder = (node) => {
  node.left && postOrder(node.left);
  node.right && postOrder(node.right);
  console.log(node.value);
}

const solution = (input) => {
  // root 지정
  const root = new Node(input[0]);
  // 입력 데이터 돌면서 root부터 노드 넣어서 트리 만듬
  for (let i = 1; i < input.length; i += 1) {
    root.insert(input[i]);
  }
  postOrder(root);
};

solution(input);


//=========================================
// const tree = {};
// let root = 0;
// let n = 1;

// input.forEach(num => {
//   tree[num] = [];
// });

// for (let i = 0; i < 0; i += 1) {
//   // 뒤 숫자가 앞 숫자보다 작으면 트리에 넣음
//   if (input[i] > input[i + 1]) {
//     if (!tree[String(input[(i)])]) {
//       tree[String(input[(i)])] = input[i + 1];
//     } else {
//       tree[String(input[(i)])].push(input[i + 1]);
//     }
//   } else {
//     // 뒤 숫자가 앞 숫자보다 크면 앞으로 넘어가서 넣음
//     tree[String(input[i - 2 * n])].push(input[i]);
//     n += 1;
//   }
// }

// console.log(tree);