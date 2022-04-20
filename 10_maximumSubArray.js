// Submission - https://leetcode.com/submissions/detail/684209293/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  if (nums.length === 1) return nums;

  let maxSum = nums[0];
  let currentSum = 0;

  nums.forEach(n => {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += n;
    maxSum = Math.max(currentSum, maxSum);
  });

  return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));

// Output: 6