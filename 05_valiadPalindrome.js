/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reverseString = s.split("").reverse().join("");
  return s === reverseString;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// Expected output -> true