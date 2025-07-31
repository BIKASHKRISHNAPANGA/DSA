var maxArea = function (height) {
  let maxarea = 0;
  let left = 0;
  let right = height.length - 1;
  while (right > left) {
    maxarea = Math.max(
      maxarea,
      (right - left) * Math.min(height[left], height[right])
    );
    if (height[left] > height[right]) {
      right--;
    } else left++;
  }
  return maxarea;
};
