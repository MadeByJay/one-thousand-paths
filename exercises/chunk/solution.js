// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkedArray = [];
  //proccess array/queue
  for (number of array) {
    let latestChunk = chunkedArray[chunkedArray.length - 1];
    if (!latestChunk || latestChunk.length == size) {
      chunkedArray.push([number]);
    } else {
      latestChunk.push(number);
    }
  }
  return chunkedArray;
}

function chunkV2(array, size) {
  const chunkArray = [];
  let index = 0;

  while (index < array.length) {
    chunkArray.push(array.slice(index, index + size));
    index += size;
  }
  return chunkArray;
}

function chunkStrategy(strategy) {
  return (array, size) => {
    return strategy(array, size);
  };
}

module.exports = chunkStrategy(chunkV2);
