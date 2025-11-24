function rotate(nums, k) {
  k = k % nums.length;

  nums.reverse();
  reverseNums(nums, 0, k - 1);
  reverseNums(nums, k, nums.length);
}

function reverseNums(array, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(rotate(nums, k));
