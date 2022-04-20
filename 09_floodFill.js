// Submission - https://leetcode.com/submissions/detail/684199212/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor, firstColor = image[sr][sc]) {
  // handle if the coordinate is out of bounds
  // or if it is already the new color
  // or if it's not from the original color we're trying to change
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor) {
    return image; // return image as-is
  }

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);

  // return modified image
  return image;
};

const image = [[0, 0, 0], [0, 0, 0]];
const sr = 0;
const sc = 0;
const newColor = 2;

console.log(floodFill(image, sr, sc, newColor));

// Output: [[2,2,2],[2,2,2]]