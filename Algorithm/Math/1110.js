const fs = require('fs');
const readFileSyncAddress = 'Algorithm/read.txt';
// '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim();

let target = +input;
let num = 0;
let result = 0;
let cnt = 0;

while (true) {
    cnt += 1;

    result = Math.floor(target / 10) + (target % 10);
    target = (target % 10) * 10 + (result % 10);
    // console.log(target);

    if (target === +input) {
        break;
    }
}

console.log(cnt);


// ======================================================================

// let numList = input.split("");

// while (result !== target) {
//     let addNum = numList.reduce((acc, curr) => { return (+acc) + (+curr) }, 0);
//     addNumList = addNum.toString().split("");

//     // 맨 앞 숫자를 없애고, 두 번째 숫자와 더해진 숫자의 두 번째 숫자를 합침
//     numList.shift();

//     if ((addNumList.length) === 2) {
//         numList.push(+addNumList[1]);
//     }
//     else {
//         numList.push(+addNumList[0]);
//     }

//     result = +(numList.join(''));

//     cnt += 1
// }

// console.log(cnt);