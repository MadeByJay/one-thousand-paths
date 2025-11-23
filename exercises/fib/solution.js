// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    return (cache[args] = fn.apply(this, args));
  };
}
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function fibIterative(n) {
  const results = [0, 1];

  for (let index = 2; index <= n; index++) {
    const sum = results[index - 2] + results[index - 1];
    results.push(sum);
  }

  return results[n];
}
const fib = memoize(slowFib);

module.exports = fib;
