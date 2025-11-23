function majorityElement(nums) {
  const majorityElement = nums.length / 2;
  const countByNumber = {};

  for (let number of nums) {
    if (!countByNumber[number]) {
      countByNumber[number] = 1;
    } else {
      countByNumber[number]++;
    }
  }

  for (let number in countByNumber) {
    if (countByNumber[number] > majorityElement) return Number(number);
  }

  return 0;
}
