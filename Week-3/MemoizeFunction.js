function add(a,b)
{
  console.log("Simple call");

 return a+b;

}

// a simple pure function to get a value adding 10
//const add = (n) => (n + 10);




console.log("Simple call", add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    }
    else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

const memoizeAdd =memoize(add);//then calling...
memoizeAdd(100,100);//returns 200
memoizeAdd(100);//returns 100
memoizeAdd(100,200);
// creating a memoized function for the 'add' pure function
