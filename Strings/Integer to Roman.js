/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let Symbolvalue = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let res = "";
  for (let [symbol, value] of Symbolvalue) {
    if (num === 0) break;
    let q = Math.floor(num / value);
    res += symbol.repeat(q);
    num = num % value;
  }
  return res;
};
