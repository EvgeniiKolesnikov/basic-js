const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let output = '';
  let lastSymbol = '';
  let n = 1;

  str.split('').forEach(value => {
    if (lastSymbol !== value) {
      if (n>1) {
        output += `${n}${lastSymbol}`
      } else {
        output += `${lastSymbol}`;
      }
      n = 1;
      lastSymbol = value;
    } else {
      n++;
    }
  });

  if (n>1) {
    output += `${n}${lastSymbol}`
  } else {
    output += `${lastSymbol}`;
  }

  return output;
}

module.exports = {
  encodeLine
};
