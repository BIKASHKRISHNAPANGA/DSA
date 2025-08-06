/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  if (dividend === INT_MIN && divisor === -1) return INT_MAX;
  if (dividend === INT_MIN && divisor === 1) return INT_MIN;

  let isnegative = dividend < 0 !== divisor < 0;
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let q = 0;
  for (let i = 31; i >= 0; i--) {
    if (a >>> i >= b) {
      //math.floor(a/2^i)>=b
      q += 1 << i; // add 2^i to result
      a = a - (b << i); // subtract b * 2^i from a
    }
  }
  return isnegative ? -q : q;
};
