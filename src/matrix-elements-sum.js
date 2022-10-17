const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const offIndex = [];

  return matrix.reduce((sumArrays, arr) => {
    return sumArrays + arr.reduce((sum, value, i) => {
      if (value === 0) offIndex[i] = 0;   
      return offIndex[i] === 0 ? sum : sum + value;
    }, 0);
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
