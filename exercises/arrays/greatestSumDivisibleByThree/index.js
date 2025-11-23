function maxSumDivThree(nums) {
  const v = [[], [], []];

  for (const num of nums) {
    v[num % 3].push(num);
  }

  v[1].sort((a, b) => b - a);
  v[2].sort((a, b) => b - a);

  let ans = 0;
  const lengthb = v[1].length;
  const lengthc = v[2].length;

  for (let countb = lengthb - 2; countb <= lengthb; ++countb) {
    if (countb >= 0) {
      for (let countc = lengthc - 2; countc <= lengthc; ++countc) {
        if (countc >= 0 && (countb - countc) % 3 === 0) {
          ans = Math.max(
            ans,
            getSum(v[1], 0, countb) + getSum(v[2], 0, countc),
          );
        }
      }
    }
  }
  return ans + getSum(v[0], 0, v[0].length);
}

const getSum = (list, start, end) => {
  let sum = 0;
  for (let i = start; i < end; ++i) {
    sum += list[i];
  }
  return sum;
};
