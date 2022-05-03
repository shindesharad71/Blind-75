// Submission - https://leetcode.com/submissions/detail/692101059/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
/*
sort approach:
- need to compute all distances, we can just omit the sqrt and just do x^2 + y^2
- need to sort by the distance: best: n log(n)
- do quicksort with a custom sorting function, then take the first k elements from the array
runtime: O(N log(N))
space: O(1)
*/
const kClosest = function (points, k) {
  points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]));

  return points.slice(0, k);
};

const points = [[1, 3], [-2, 2]];
const k = 1;
console.log(kClosest(points, k));

// Output: [[-2,2]]