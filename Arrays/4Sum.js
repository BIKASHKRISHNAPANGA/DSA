/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = [];
  let l = nums.length;
  nums.sort((a, b) => a - b);
  if (l < 4) return [];
  for (let i = 0; i < l - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < l - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let ab = nums[i] + nums[j];
      let left = j + 1;
      let right = l - 1;
      while (left < right) {
        let sum = ab + nums[left] + nums[right];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
    }
  }
  return res;
};
