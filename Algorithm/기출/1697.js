const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
const baek = '/dev/stdin';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solution = (input) => {
  let [loc, destination] = input[0].split(" ").map(Number);

  let check = Array.from({ length: 100100 }, () => false);

  const bfs = (loc) => {
    const queue = [];
    queue.push([loc, 0]);
    check[loc] = true;

    while (queue.length) {
      const [cur, time] = queue.shift();

      if (cur === destination) return time;

      for (next of [cur * 2, cur + 1, cur - 1]) {
        if (!check[next] && next >= 0 && next <= 100000) {
          check[next] = true;
          queue.push([next, time + 1]);
        }
      }
    }
  }

  console.log(bfs(loc));
};

solution(input);