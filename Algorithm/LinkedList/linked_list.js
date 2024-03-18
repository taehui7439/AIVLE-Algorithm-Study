class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	insertHead(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	insertLast(data) {
		let node = new Node(data);
		let curr;

		if (!this.head) {

			// head가 없으므로 head 지정
			this.head = node;
		} else {

			// 그렇지 않으면 next가 없을 때까지 뒤로 넘어감
			curr = this.head;

			while (curr.next) {
				curr = curr.next;
			}

			curr.next = node;
		}
		this.size++;
	}

	insertAt(data, idx) {

		// 사이즈를 넘는 인덱스는 리턴
		if (idx > 0 && idx > this.size) return;

		// 맨 앞에 넣을 경우, 새로운 노드를 head로 지정
		if (idx === 0) {
			this.head = new Node(data, this.head);
			this.size += 1;
			return;
		}

		// 그렇지 않으면 인덱스까지 뒤로 넘어감
		const node = new Node(data);
		let curr, prev;
		let cnt = 0;

		curr = this.head;

		while (cnt < idx) {
			prev = curr;
			curr = curr.next;
			cnt += 1;
		}

		node.next = curr;
		prev.next = node;

		this.size += 1;
	}


}