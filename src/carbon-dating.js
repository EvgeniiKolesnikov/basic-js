const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const T = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') return false;
	if (isNaN(+sampleActivity)) return false;
	if (+sampleActivity <= 0) return false;

	let k = T / HALF_LIFE_PERIOD;
	let N0 = MODERN_ACTIVITY;
	let N = +sampleActivity;
	let x = Math.ceil((Math.log2(N0 / N) / k) * T);

	return x <= 0 ? false : x;
}

module.exports = {
  dateSample
};