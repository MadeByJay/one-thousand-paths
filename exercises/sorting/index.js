// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let iterationIndex = 0; iterationIndex < arr.length; iterationIndex++) {
    for (
      let swapIndex = 0;
      swapIndex < arr.length - iterationIndex - 1;
      swapIndex++
    ) {
      if (arr[swapIndex] > arr[swapIndex + 1]) {
        const lesser = arr[swapIndex + 1];
        arr[swapIndex + 1] = arr[swapIndex];
        arr[swapIndex] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let iterationIndex = 0; iterationIndex < arr.length; iterationIndex++) {
    let indexOfMin = iterationIndex;
    for (
      let swapIndex = iterationIndex + 1;
      swapIndex < arr.length;
      swapIndex++
    ) {
      if (arr[indexOfMin] > arr[swapIndex]) {
        indexOfMin = swapIndex;
      }
    }
    if (indexOfMin !== iterationIndex) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[iterationIndex];
      arr[iterationIndex] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
