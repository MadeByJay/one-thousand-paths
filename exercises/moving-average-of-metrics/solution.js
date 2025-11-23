// Problem
// Given an array of metric values and a window size:
// const metrics = [10, 20, 30, 40, 50];
// const windowSize = 3;
// Write:
// function calculateMovingAverage(metrics, windowSize)
// that returns an array of averages for each contiguous window:
// [20, 30, 40]
// (10+20+30)/3, (20+30+40)/3, (30+40+50)/3
// If the window size is larger than the array length, return [].

function calculateMovingAverage(metrics, windowSize) {
  if (!Array.isArray(metrics) || windowSize <= 0) {
    return [];
  }

  if (windowSize > metrics.length) {
    return [];
  }

  const result = [];
  let currentWindowSum = 0;

  // Initialize the first window
  for (let index = 0; index < windowSize; index += 1) {
    currentWindowSum += metrics[index];
  }

  result.push(currentWindowSum / windowSize);

  // Slide the window
  for (let index = windowSize; index < metrics.length; index += 1) {
    currentWindowSum += metrics[index]; // add new element
    currentWindowSum -= metrics[index - windowSize]; // remove element leaving window

    result.push(currentWindowSum / windowSize);
  }

  return result;
}

// Explanation
// What we’re practicing:
// - Sliding window technique – shows up often.
// - Avoiding re-summing the window each time.
// Steps:
// 1. Compute sum of the first window indexes 0..windowSize-1.
// 2. Push the first average.
// 3. For each new index:
// - Add the new metric into currentWindowSum.
// - Subtract the metric that falls out of the window.
// - Push the new average.
// 4. Return the resulting list.
// Time complexity is O(n), which is what an interviewer wants to see.
