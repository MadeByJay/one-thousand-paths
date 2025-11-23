// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA = "", stringB = "") {
  //normalize and use a map
  const normalizedStringA = stringA
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  const normalizedStringB = stringB
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  if (normalizedStringA.length !== normalizedStringB.length) {
    return false;
  }

  const countByCharMap = new Map();

  for (let char of normalizedStringA) {
    const currentCount = countByCharMap.get(char) + 1 || 1;
    countByCharMap.set(char, currentCount);
  }

  for (let char of normalizedStringB) {
    let currentCount = countByCharMap.get(char) || 0;
    if (!currentCount || currentCount < 0) {
      return false;
    }
    currentCount--;
    countByCharMap.set(char, currentCount);
  }

  return true;
}

module.exports = anagrams;
