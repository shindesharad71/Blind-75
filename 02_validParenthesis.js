/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {

  if (s.length % 2 !== 0) {
    return false;
  }

  const OPEN = new Set(['(', '{', '[']);
  const BRACKETS = { '}': '{', ')': '(', ']': '[' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {

    if (OPEN.has(s[i])) {
      stack.push(s[i]);
    } else {

      if (stack.length === 0) {
        return false;
      } else {
        const recentElement = stack.pop();

        if (recentElement !== BRACKETS[s[i]]) {
          return false;
        }
      }

    }
  }

  return stack.length === 0;
};

// const s = "()[]{}";
const s = "([{}])";

// Expected Output - true

console.log(isValid(s));