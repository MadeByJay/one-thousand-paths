// Given an array of HTTP status codes:
// const statusCodes = [200, 200, 404, 500, 200, 404];
// Write:
// function findMostFrequentStatusCode(statusCodes)
// that returns the status code that appears most often.
// If there is a tie, return the smallest status code.

function findMostFrequentStatusCode(statusCodes) {
  if (!Array.isArray(statusCodes) || statusCodes.length === 0) {
    return null;
  }

  const countByStatusCode = {};

  for (const statusCode of statusCodes) {
    if (!countByStatusCode[statusCode]) {
      countByStatusCode[statusCode] = 0;
    }
    countByStatusCode[statusCode] += 1;
  }

  let mostFrequentStatusCode = null;
  let highestCount = -1;

  for (const statusCodeString in countByStatusCode) {
    const statusCodeNumber = Number(statusCodeString);
    const count = countByStatusCode[statusCodeString];

    if (
      count > highestCount ||
      (count === highestCount && statusCodeNumber < mostFrequentStatusCode)
    ) {
      highestCount = count;
      mostFrequentStatusCode = statusCodeNumber;
    }
  }

  return mostFrequentStatusCode;
}

// Explanation
// What we’re practicing:
// - Counting frequencies with a dictionary.
// - Tie-breaking logic while iterating.
// Steps:
// 1. Count how often each status appears using countByStatusCode.
// 2. Loop over the dictionary:
//     - If this status has a higher count, it becomes the new winner.
//     - If the count is equal, pick the smaller code.
// 3. Return the final winner.
// This “build frequency map → scan for best” pattern is super common in algo challenges.
