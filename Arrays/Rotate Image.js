/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let top = 0;
  let bottom = matrix.length - 1;
  let l = matrix.length - 1;
  while (top < bottom) {
    for (let i = 0; i <= l; i++) {
      [matrix[top][i], matrix[bottom][i]] = [matrix[bottom][i], matrix[top][i]];
    }
    top++;
    bottom--;
  }

  for (let i = 0; i <= l; i++) {
    for (let j = i + 1; j <= l; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
