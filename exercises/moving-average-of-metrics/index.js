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
  if (windowSize > metrics.length) return [];
  const result = [];
  let currentWindowSum = 0;

  //first window
  for (let index = 0; index < windowSize; index++) {
    currentWindowSum = currentWindowSum + metrics[index];
  }
  result.push(currentWindowSum / windowSize);

  for (let index = windowSize; index < metrics.length; index++) {
    currentWindowSum = currentWindowSum + metrics[index];
    currentWindowSum = currentWindowSum - metrics[index - windowSize];

    result.push(currentWindowSum / windowSize);
  }

  return result;
}

const metrics = [10, 20, 30, 40, 50];
const windowSize = 3;

console.log(calculateMovingAverage(metrics, windowSize));
