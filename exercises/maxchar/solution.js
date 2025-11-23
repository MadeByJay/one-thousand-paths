// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const countByCharMap = new Map();
  let highestTuple = [0, ""];
  //walk thru str
  for (char of str) {
    //update count or default to 1
    let count = countByCharMap.get(char) + 1 || 1;
    countByCharMap.set(char, count);
    const [currentHighestCount] = highestTuple;
    if (count > currentHighestCount) {
      highestTuple = [count, char];
    }
  }
  const [, mostFrequentChar] = highestTuple;

  return mostFrequentChar;
}

function maxCharStrategy(strategy) {
  return (str) => {
    return strategy(str);
  };
}
module.exports = maxCharStrategy(maxChar);
