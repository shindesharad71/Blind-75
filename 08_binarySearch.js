// Submission - https://leetcode.com/submissions/detail/683950982/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));

// Output - 4