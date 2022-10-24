const findKey = require ('../findKey');
const assert = require('chai').assert;

describe('#findKey', () => {
  const test1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 2 },
    "noma":      { stars: 3 },
    "elBulli":   { stars: 4 },
    "Ora":       { stars: 5 },
    "Akelarre":  { stars: 6 }
  }, x => x.stars === 1) // => "Blue Hill"
  const test2 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 2 },
    "noma":      { stars: 3 },
    "elBulli":   { stars: 4 },
    "Ora":       { stars: 5 },
    "Akelarre":  { stars: 6 }
  }, x => x.stars === 2) // => "Akaleri"
  const test3 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 2 },
    "noma":      { stars: 3 },
    "elBulli":   { stars: 4 },
    "Ora":       { stars: 5 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3) // => "noma"
  const test4 = findKey({
    "Blue Hill": { stars: 4 },
    "Akaleri":   { stars: 2 },
    "noma":      { stars: 3 },
    "elBulli":   { stars: 4 },
    "Ora":       { stars: 4 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 4) // => "elBulli"
  describe('when there is only one valid value in the object', () => {
    it('with a callback searching for a key value of 1 will return the key with a value of 1', () => {
      assert.equal(test1, 'Blue Hill');
    });
    it('with a callback searching for a key value of 2 will return the key with a value of 2', () => {
      assert.equal(test2, 'Akaleri');
    });
  })
  describe('when there are two or more valid values in the object', () => {
    it('with a callback searching for a key value of 3 will return the first key with a value of 3', () => {
      assert.equal(test3, 'noma');
    });
    it('with a callback searching for a key value of 4 will return the first key with a value of 4', () => {
      assert.equal(test4, 'Blue Hill');
    });
  })
})