/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0;
  let l = columnTitle.length;
  for (let i = 0; i < l; i++) {
    res += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, l - (i + 1));
  }
  return res;
};
