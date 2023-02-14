
// prints element and next greater element
function printNge(arr, n)
{
	var s = [];

	/* push the first element to stack */
	s.push(arr[0]);

	// iterate for rest of the elements
	for (var i = 1; i < n; i++)
	{

		if (s.length == 0) {
			s.push(arr[i]);
			continue;
		}

		
		while (s.length ==0 == false
			&& s[s.length-1] < arr[i])
		{
			console.log( s[s.length-1]
				+ " --> " + arr[i]);
			s.pop();
		}

		/* push next to stack so that we can find
		next greater for it */
		s.push(arr[i]);
	}

	
	while (s.length !=0) {
		console.log( s[s.length-1] + " --> " + -1 );
		s.pop();
	}
}

var arr = [1, 3, 2, 4];
var n = arr.length;
printNge(arr, n);

Time Complexity: O(N) 
 Space Complexity: O(N)
