function removeDuplicates(nums) {
  let insertIndex = 1;

  for (let trackingIndex = 1; trackingIndex < nums.length; trackingIndex++) {
    if (nums[trackingIndex - 1] !== nums[trackingIndex]) {
      nums[insertIndex] = nums[trackingIndex];
      insertIndex++;
    }
  }

  return insertIndex;
}
