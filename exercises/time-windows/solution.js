// const timestamps = [5, 20, 30, 80, 110];
// max gap is 80 - 30 = 50

function maxGap(timestamps) {
  if (!Array.isArray(timestamps) || timestamps.length < 2) {
    return 0;
  }

  // Work on a sorted copy so we do not mutate the original
  const sortedTimestamps = [...timestamps].sort((a, b) => a - b);

  let maximumGap = 0;

  for (let index = 1; index < sortedTimestamps.length; index += 1) {
    const previousTime = sortedTimestamps[index - 1];
    const currentTime = sortedTimestamps[index];
    const gap = currentTime - previousTime;

    if (gap > maximumGap) {
      maximumGap = gap;
    }
  }

  return maximumGap;
}

// What’s happening and why
// We sort the timestamps (O(n log n)) so consecutive entries in the array are actual consecutive events in time.
// Then we do a single pass:
// Compute gap = currentTime - previousTime.
// Track the largest gap found.
// This “sort + linear scan” pattern is a go-to for many array interval problems.
