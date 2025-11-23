// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string) {
  let result = string[0].toUpperCase();
  for (let index = 1; index < string.length; index++) {
    const previousChar = string[index - 1];
    if (previousChar === " ") {
      result = result + string[index].toUpperCase();
    } else {
      result = result + string[index];
    }
  }
  return result;
}

module.exports = capitalize;
