/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const climbStairs = function (n) {
    let two = 0;
    let one = 1;
    for (let i = 0; i < n; i++) {
      [two, one] = [one, two + one];
    }
    return one;
  };
};