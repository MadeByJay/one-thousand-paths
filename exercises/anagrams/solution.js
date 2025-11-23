// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const normalizedStringA = stringA
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  const normalizedStringB = stringB
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  if (normalizedStringA.length !== normalizedStringB.length) return false;

  const charByCountMap = new Map();

  for (char of normalizedStringA) {
    const currentCount = charByCountMap.get(char) + 1 || 1;
    charByCountMap.set(char, currentCount);
  }

  for (char of normalizedStringB) {
    let currentCount = charByCountMap.get(char) || 0;
    if (!currentCount || currentCount < 0) return false;
    currentCount -= 1;
    charByCountMap.set(char, currentCount);
  }

  return true;
}

function anagramsSorted(stringA, stringB) {
  const normalizedStringA = stringA
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort();
  const normalizedStringB = stringB
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort();

  if (normalizedStringA.length !== normalizedStringB.length) return false;

  for (let index = 0; index < normalizedStringA.length; index++) {
    const charA = normalizedStringA[index];
    const charB = normalizedStringB[index];
    console.log(charA, charB);
    if (normalizedStringA[index] !== normalizedStringB[index]) return false;
  }

  return true;
}

function anagramsStrategy(strategy) {
  return (stringA, stringB) => strategy(stringA, stringB);
}

module.exports = anagramsStrategy(anagramsSorted);
