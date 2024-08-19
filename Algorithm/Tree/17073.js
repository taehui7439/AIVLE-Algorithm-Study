function inputTemplate() {
  const fs = require('fs');
  const readFileSyncAddress = 'Algorithm/read.txt';
  const forBaekJoon = "0, 'utf-8'";
  const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

  return input;
}

const input = inputTemplate()
const [n, m] = input[0].split(' ').map(v => +v);
const nodes = input.slice(1).map((v) => v.split(' ').map(Number));

const arr = Array.from({ length: n + 1 }, () => []);
const check = Array.from({ length: n + 1 }).fill(false);

const solution = (n, m, nodes) => {
  nodes.forEach(([n1, n2]) => {
    arr[n1].push(n2);
    arr[n2].push(n1);
  });
  let leaf = 0;

  const dfs = (n) => {
    check[n] = true;
    let isLeaf = true;

    for (let next of arr[n]) {
      if (!check[next]) {
        isLeaf = false;
        dfs(next);
      }
    }

    if (isLeaf) leaf += 1;
  };

  dfs(1);

  return m / leaf;
};

console.log(solution(n, m, nodes));