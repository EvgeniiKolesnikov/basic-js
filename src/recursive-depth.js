const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	deep = 1;
	maxDeep = 1;

	// calculateDepth(arr) {
	//   console.log(arr);
	//   this.deep++;
	//   // arr.map(v => {
	//   //   if (Array.isArray(v)) {

	//   //     if (this.deep > this.maxDeep) {
	//   //       this.maxDeep++;
	//   //     }

	//   //     this.calculateDepth(v);
	//   //   }
	//   // })
	//   return this.deep;

	// }

	calculateDepth(arr) {
		if (arr === '') return 0;

		this.deep = 0;
		this.maxDeep = 0;

		let json = JSON.stringify(arr);
		// console.log('json =', json);

		[...json].forEach((v) => {
			if (v === '[') {
				let fakeCounter = this.calculateDepth('');
				this.deep++;
				if (this.deep > this.maxDeep) {
					this.maxDeep = this.deep;
				}
			}
			if (v === ']') {
				this.deep--;
			}
		});
		return this.maxDeep;
	}
}

// const depthCalc = new DepthCalculator();
// console.log('================');
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])); // => 2
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); // => 1
// console.log(depthCalc.calculateDepth([[[]]])); // => 3
// console.log(depthCalc.calculateDepth([])); // => 1
// console.log(depthCalc.calculateDepth()); // => 0

module.exports = {
	DepthCalculator,
};
