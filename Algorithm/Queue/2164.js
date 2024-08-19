// 제일 위의 카드 버림
// 그 다음 카드 밑으로 넣음
// 마지막 카드까지 반복
// 10의 5제곱 => O(n^2)이면 안됨
// 결국 구현해야함 

const fs = require('fs');
const input = fs.readFileSync("AIVLE-Algorithm-Study/Algorithm/read.txt").toString().trim();
let n = Number(input);
// '/dev/stdin'

class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	q_push(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}
		this.tail = newNode;
		this.length += 1;

		return newNode;
	}

	removeHead() {
		if (this.head === this.tail) return this.head;
		else {
			this.head = this.head.next;
			this.head.prev = null;
		}
		this.length -= 1;
	}

	getLength() {
		return this.length;
	}

	getHead() {
		return this.head.value;
	}
}

const l = new LinkedList();

for (let i = 1; i <= n; i += 1) l.q_push(i);

while (true) {
	let lg = l.getLength();
	if (lg === 1) break;

	l.removeHead();
	l.q_push(l.getHead());
	l.removeHead();

	console.log(`현재 head: ${l.getHead()}`);
	console.log(`현재 length: ${l.getLength()}`);
}

console.log(l.getHead());