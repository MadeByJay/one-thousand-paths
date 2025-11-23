// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    const fizz = index % 3 === 0;
    const buzz = index % 5 === 0;

    if (fizz && buzz) {
      console.log("fizzbuzz");
    } else if (fizz) {
      console.log("fizz");
    } else if (buzz) {
      console.log("buzz");
    } else {
      console.log(index);
    }
  }
}

function fizzBuzzStrategy(strategy) {
  return (number) => {
    return strategy(number);
  };
}
module.exports = fizzBuzzStrategy(fizzBuzz);
