// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str = "") {
  const reversedString = str.split("").reverse().join("");

  for (let index = 0; index < str.length - 1; index++) {
    if (reversedString[index] !== str[index]) return false;
  }

  return true;
}

function palindromeStrategy(strategy) {
  return (string) => {
    return strategy(string);
  };
}

module.exports = palindromeStrategy(palindrome);
