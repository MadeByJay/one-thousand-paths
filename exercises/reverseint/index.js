// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return (
    parseInt(Math.abs(n).toString().split("").reverse().join("")) * Math.sign(n)
  );
}

function reverseIntLoop(number) {
  const stringArray = Math.abs(number).toString().split("");
  let reversedString = "";

  for (let index = stringArray.length - 1; index >= 0; index--) {
    reversedString = reversedString.concat(stringArray[index]);
  }

  return parseInt(reversedString) * Math.sign(number);
}

function reverseIntStrategy(strategy) {
  return (number) => {
    return strategy(number);
  };
}

module.exports = reverseIntStrategy(reverseIntLoop);
