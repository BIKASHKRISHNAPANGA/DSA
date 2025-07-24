/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let st2 = "";
  let st1 = "";
  for (let word of word1) {
    st1 += word;
  }
  for (let word of word2) {
    st2 += word;
  }
  if (st1 === st2) return true;
  else return false;
};
