// Submission - https://leetcode.com/submissions/detail/682004989/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

// Expected output = [0,1]

console.log(twoSum(nums, target));