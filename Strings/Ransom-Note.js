/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const freq = {};
  for (let char of magazine) {
    if (freq[char]) freq[char]++;
    else freq[char] = 1;
  }
  for (let char of ransomNote) {
    if (freq[char]) {
      freq[char]--;
    } else return false;
  }
  return true;
};
