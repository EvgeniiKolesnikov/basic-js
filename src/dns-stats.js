const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const result = {};
	const splittedDomains = domains.map((domain) => domain.split('.').reverse());
	splittedDomains.forEach((v) => {
		let dns = '';

		for (let i = 0; i < v.length; i++) {
			dns += `.${v[i]}`;
			if (result[dns] == undefined) {
				result[dns] = 1;
			} else {
				result[dns]++;
			}
		}
	});

	return result;
}

module.exports = {
	getDNSStats,
};
