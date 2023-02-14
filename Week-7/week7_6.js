//program to implement Queue using stacks

class Queue {
	constructor() {
		this.s1 = [];
		this.s2 = [];
	}

	// Enqueue an item to the queue
	funcation enQueue(x) {
	
		// Push item into the first stack
		this.s1.push(x);
	}

	// Dequeue an item from the queue
	function deQueue() {
		// if both stacks are empty
		if (this.s1.length == 0 && this.s2.length == 0) {
			console.log("Q is empty");
			exit(0);
		}

		// if s2 is empty, move
		// elements from s1
		if (this.s2.length == 0) {
			while (this.s1.length != 0) {
				this.s2.push(this.s1[0]);
				this.s1.shift();
			}
		}

		// return the top item from s2
		let x = this.s2[0];
		this.s2.shift();
		return x;
	}
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

Time Complexity; 
Push operation: O(1). 
Pop operation: O(N)

 Space Complexity: O(N).



