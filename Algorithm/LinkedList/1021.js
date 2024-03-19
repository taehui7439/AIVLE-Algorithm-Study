class Node {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}
class DLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	insert(data) {

		let node = new Node(data)
		// 만약 head가 없다면 head로 지정
		if (!this.head) {
			this.head = this.tail = node
		} else {
			// 아니면 맨 뒤에 추가
			node.prev = this.tail;
			node.next = this.head;
			this.tail.next = node;
			this.head.prev = node;
			this.tail = node;
		}

		this.size += 1;
	}

	delete() {

		// 맨 앞의 노드를 삭제
		// 만약 노드가 1개일 경우
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {

			// 아닐경우, 2번째 노드의 앞을 tail에 연결하고 1번째 노드를 지움
			let secNode = this.head.next;
			secNode.prev = this.tail;
			this.tail.next = secNode;
			this.head = secNode;
		}
		this.size -= 1;

		// console.log('node delete');
	}

	moveToLeft(n = 1) {

		// 노드가 1개인 경우 불가
		if (this.size === 1) return;

		while (n > 0) {
			// 아니면, head가 tail이 되고 tail의 prev를 tail로 함
			this.head = this.head.prev;
			this.tail = this.tail.prev;

			n -= 1;
		}

		// console.log('move left');
	}

	moveToRight(n = 1) {

		// 노드가 1개인 경우 불가
		if (this.size === 1) return;

		while (n > 0) {
			// 아니면, tail이 head가 되고 head의 next를 head로 함
			this.head = this.head.next;
			this.tail = this.tail.next;

			n -= 1;
		}

		// console.log('move left');
	}

	findMinimumCnt(data) {

		// 만약 size가 1 이하면 리턴 0
		if (this.size <= 1) return 0;

		// 아니면 좌, 우로 움직이는 횟수 count
		let leftCnt = 0;
		let rightCnt = 0;
		let node = this.head;

		// 현재 노드의 데이터가 찾는 데이터가 아니라면 다음으로 넘어감
		// 죄, 우를 계산하여 더 짧은 방향으로 움직임
		while (node.data !== data) {
			node = node.next;
			rightCnt += 1;
		}

		node = this.head;

		while (node.data !== data) {
			node = node.prev;
			leftCnt += 1;
		}

		// console.log(`leftcnt: ${leftCnt}, rightcnt: ${rightCnt}`);

		if (leftCnt < rightCnt) {
			this.moveToLeft(leftCnt);
			this.delete();
			return leftCnt;
		} else {
			this.moveToRight(rightCnt);
			this.delete();
			return rightCnt;
		}
	}
}

const [n, m, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(v => +v);

ll = new DLinkedList();

// let n = 10;
// let m = 3;
// let arr = [2, 9, 5];

for (let i = 1; i <= n; i++) ll.insert(i);

console.log(arr.reduce((acc, r) => acc + ll.findMinimumCnt(r), 0))


// --------------------------------------------------------------------------
// 다른 풀이법

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const inp1 = input[0].split(' ');
const inp2 = input[1].split(' ');

const n_int = Number(inp1[0]);
const m_int = Number(inp1[0]);

let que = [];

for (let i = 1; i <= n; i++) {
	que.push(i)
}

let cnt = 0;