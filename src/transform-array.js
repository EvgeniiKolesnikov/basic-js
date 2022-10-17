const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error(`'arr' parameter must be an instance of the Array!`);
	}

	let array = [...arr];

	let index = array.indexOf('--double-next');

	while (index !== -1) {
		if (index === array.length - 1) {
			array.splice(index, 1);
			index = array.indexOf('--double-next');
			continue;
		}
		let doubleNextValue = array[index + 1];
		array.splice(index, 1, doubleNextValue);
		index = array.indexOf('--double-next');
	}

	array.map((v, i, arr) => {
		if (v === '--discard-next') {
			if (i < arr.length - 2) arr[i + 1] = undefined;
			arr[i] = undefined;
		} else if (v === '--discard-prev') {
			if (i > 0) arr[i - 1] = undefined;
			arr[i] = undefined;
		} else {
			return v;
		}
	});

	index = array.indexOf('--double-prev');

	while (index !== -1) {
		if (index === 0) {
			array.splice(index, 1);
			index = array.indexOf('--double-prev');
			continue;
		}
		let doublePrevValue = array[index - 1];
		array.splice(index, 1, doublePrevValue);
		index = array.indexOf('--double-prev');
	}

	const transformedArray = array.filter((v) => v !== undefined);
	return transformedArray;
}

module.exports = {
  transform
};