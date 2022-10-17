const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
//  * matrix1 = [
//  *  [true, false, false],
//  *  [false, true, false],
//  *  [false, false, false]
//  * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const minesMatrix = matrix.map((line) =>
		line.map((cell) => (cell === true ? 1 : 0))
	);

	const cols = minesMatrix[0].length;
	const rows = minesMatrix.length;
	const m = [];

	for (let i = 0; i < rows; i++) {
		m[i] = [];
		for (let j = 0; j < cols; j++) {
			if (minesMatrix[i][j] === 1) {
				m[i][j] = 1;
			} else {
				m[i][j] = 0;

        // top left
				if (i > 0 && j > 0)               m[i][j] += minesMatrix[i - 1][j - 1];
        // top center
				if (i > 0)                        m[i][j] += minesMatrix[i - 1][j];
        // top right
				if (i > 0 && j < cols - 1)        m[i][j] += minesMatrix[i - 1][j + 1];

        // left
				if (j > 0)                        m[i][j] += minesMatrix[i][j - 1];
        // right
				if (j < cols - 1)                 m[i][j] += minesMatrix[i][j + 1];

        // bottom left
				if (i < rows - 1 && j > 0)        m[i][j] += minesMatrix[i + 1][j - 1];
        // bottom center
				if (i < rows - 1)                 m[i][j] += minesMatrix[i + 1][j];
        // bottom right
				if (i < rows - 1 && j < cols - 1) m[i][j] += minesMatrix[i + 1][j + 1];
			}
		}
	}

  return m;
}

module.exports = {
	minesweeper,
};
