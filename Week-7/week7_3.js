
//program to detect loop in linked list 

class Node
{
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

// Head of list
let head;

/* Inserts a new Node at front of the list. */
function push(new_data)
{
	let new_node = new Node(new_data);

	/* 3. Make next of new Node as head */
	new_node.next = head;

	/* 4. Move the head to point to new Node */
	head = new_node;
}

function detectLoop(h)
{
	if (head == null)
		return false;
	else
	{
		
		// Traversing the linked list
		while (head != null)
		{
			
			// If loop found
			if (head.data == -1)
			{
				return true;
			}
			else
			{
				head.data = -1;
				head = head.next;
			}
		}
		
		// If loop not found return false
		return false;
	}
}

push(1);
push(2);
push(3);
push(4);
push(5);

/* Create a loop for testing */
head.next.next.next.next.next= head.next.next;

if (detectLoop(head))
	console.log("1");
else
	console.log("0");


//Time Complexity: O(N)
// Space Complexity: O(1)
