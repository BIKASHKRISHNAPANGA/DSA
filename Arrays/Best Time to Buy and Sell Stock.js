/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else maxprofit = Math.max(maxprofit, prices[i] - min);
  }
  return maxprofit;
};
