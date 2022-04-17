// Submission - https://leetcode.com/submissions/detail/682021831/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {

  if (s.length % 2 !== 0) {
    return false;
  }

  const BRACKETS = { '}': '{', ')': '(', ']': '[' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {

    if (s[i] in BRACKETS) {
      if (stack.length === 0) {
        return false;
      } else {
        const recentElement = stack.pop();

        if (recentElement !== BRACKETS[s[i]]) {
          return false;
        }
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};

// const s = "()[]{}";
const s = "([{}])";

// Expected Output - true

console.log(isValid(s));