/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const intMax = 2 ** 31 - 1;
  let neg = false;
  if (x < 0) neg = true;
  let rev = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  if (rev > intMax) return 0;
  return neg ? -rev : rev;
};
/// did in string easy or use /10 and reverse the usul;