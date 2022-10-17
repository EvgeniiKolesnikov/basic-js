const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor (type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');  
    }

    while (key.length < message.length) {
      key += key; 
    }

    let messageArr = message.toUpperCase().split('').map(v => this.alphabet.indexOf(v));
    let alphabetArr = messageArr.filter(v => v !== -1);
    let keyArr = key.toUpperCase().split('').map(v => this.alphabet.indexOf(v));
    let outArr = alphabetArr.map((v, i) => this.alphabet[(v + keyArr[i])%26])
    let missedIndexes = 0;

    const outMessage = messageArr.map((v, i) => {
      if (v !== -1) {
        return outArr[i - missedIndexes]
      } else {
        missedIndexes++;
        return message[i];
      }
    }).join('');

    return this.type === false 
    ?  [...outMessage].reverse().join('')
    :  outMessage;

  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');  
    }

    while (key.length < message.length) {
      key += key; 
    }

    let messageArr = message.toUpperCase().split('').map(v => this.alphabet.indexOf(v));
    let alphabetArr = messageArr.filter(v => v !== -1);
    let keyArr = key.toUpperCase().split('').map(v => this.alphabet.indexOf(v));
    let outArr = alphabetArr.map((v, i) => (v - keyArr[i] > 0)
      ? this.alphabet[(v - keyArr[i]) % 26]
      : this.alphabet[(v - keyArr[i] + 26) % 26]);
    let missedIndexes = 0;

    const outMessage = messageArr.map((v, i) => {
      if (v !== -1) {
        return outArr[i - missedIndexes]
      } else {
        missedIndexes++;
        return message[i];
      }
    }).join('');

    return this.type === false 
      ?  [...outMessage].reverse().join('')
      :  outMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
