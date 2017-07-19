/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let maxlength = 0;
  let substring = '';

  s.split('').forEach((x) => {
    if (substring.indexOf(x) !== -1) {
      if (maxlength < substring.length) {
        maxlength = substring.length;
      }
      substring = x;
    } else {
      substring += x;
    }
  });

  return maxlength;
}

module.exports = lengthOfLongestSubstring;
