const findKeyByValue = require ('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
  };
  const test1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
  const test2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
  describe('when there is one valid value in the object', () => {
    it('given a value, findKeyByValue returns the key that has that value', () => {
      assert.equal(test1, "drama");
    });
  })
  describe('when there are no valid values in test', () => {
    it('given a value that does not exist in object, findKeyByValue will return undefined', () => {
      assert.equal(test2, undefined);
    });
  })
})