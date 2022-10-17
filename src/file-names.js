const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let files = {};
  
	let arr = names.map((value, i) => {
    if (files[value] === undefined) {
      files[value] = 0;
      return `${value}`
    } else {
      files[value]++;
      const newValue = `${value}(${files[value]})`;

      if (files[newValue] === undefined) {
        files[newValue] = 0;
      } else {
        files[newValue]++;
      }

      return newValue;
    }
  });

	return arr;
}

module.exports = {
	renameFiles,
};
