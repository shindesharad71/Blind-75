// Submission Code - https://leetcode.com/submissions/detail/683230269/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {

    if (t[i] in map) {

      if (map[t[i]] === 1) {
        delete map[t[i]];
      } else {
        map[t[i]] -= 1;
      }

    } else {
      return false;
    }
  }

  return Object.keys(map).length === 0;
};

// const s = "anagram";
// const t = "nagaram";

console.log(isAnagram(s, t));