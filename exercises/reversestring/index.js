// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str = "") {
  return str.split("").reverse().join("");
}

function reverseLoop(str = "") {
  const strArray = str.split("");
  let reversedString = "";

  for (let index = strArray.length - 1; index >= 0; index--) {
    reversedString = reversedString.concat(strArray[index]);
  }

  return reversedString;
}

function reverseStringStrategy(strategy) {
  return (str) => {
    return strategy(str);
  };
}

module.exports = reverseStringStrategy(reverse);
