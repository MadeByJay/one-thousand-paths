function removeDuplicats(nums) {
  if (!nums.length) return 0;

  let insertIndex = 1;
  let count = 1;

  for (let trackingIndex = 1; trackingIndex < nums.length; trackingIndex++) {
    if (nums[trackingIndex - 1] === nums[trackingIndex]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[insertIndex] = nums[trackingIndex];
      trackingIndex++;
    }
  }

  return insertIndex;
}
