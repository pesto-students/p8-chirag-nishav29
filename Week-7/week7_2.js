
var head;

class Node
{
	constructor(val)
	{
		this.data = val;
		this.next = null;
	}
}

// This function rotates a linked list
function rotate(k)
{
	if (k == 0)
		return;

	
	var current = head;
	var count = 1;

	while (count < k && current != null)
	{
		current = current.next;
		count++;
	}

	// If current is NULL, k is greater than or equal to count of nodes in linked list. Don't change the list in this case
	if (current == null)
		return;

	var kthNode = current;

	while (current.next != null)
		current = current.next;

	current.next = head;

	// Change head to (k+1)th node
	// head is now changed to node 50
	head = kthNode.next;

	// change next of kth node to null
	kthNode.next = null;
}

 
//push a new node on the front of the list
	

function push(new_data) {

var new_node = new Node(new_data);
new_node.next = head;
head = new_node;
}

function printList()
{
	var temp = head;
	while (temp != null)
	{
		console.log(temp.data + " ");
		temp = temp.next;
	}
}

for (i = 8; i >= 1; i -= 1)
	push(i);

printList();

rotate(4);

console.log("Rotated Linked List");
printList();


Time Complexity: O(N)
Space Complexity: O(1)
