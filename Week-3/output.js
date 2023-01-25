"count value outside increment Method:" 0
"Message value outside log Method:" "Count is 0"
"count value inside increment Method:" 0
"count value inside increment Method:" 1
"count value inside increment Method:" 2
"Message value inside log Method:" "Count is 0"
"Count is 0"


The  above output is because of closure, a closure gives you access to an outer function's scope from an inner function, so here count is a global variable and we can access count value inside increment function.

so first count value is 0, then once it goes inside inner function, it starts incrementing value from 0 to 2, then when log() called again its accessing count value from global scope.


