const without = require('../index').without;
const assert = require('chai').assert;

describe('#without', () => {
  describe('returns an array without the target parameter values', () => {
    it('returns empty array if given empty array', () => {
      assert.deepEqual(without([], []), []);
    });
    it('returns array without target elements', () => {
      assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
    });
    it('returns array without target elements if out of order', () => {
      assert.deepEqual(without([3, 1, 3, 4, 1, 2, 3], [2, 5]), [3, 1, 3, 4, 1, 3]);
    })
    it('returns array and removes all instances of targets', () => {
      assert.deepEqual(without([1, 3, 4, 1, 4, 1, 4, 1, 3, 2, 3], [1, 2, 3]), [4, 4, 4]);
    });
  })
  describe('returns a new array without mutating old array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);    
    it('returns the original array unmutated', () => {
      assert.deepEqual(words, ["hello", "world", "lighthouse"]);
    })
  })
})