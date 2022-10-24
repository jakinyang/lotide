const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  describe('single layer arrays', () => {
    it('Tests that [1, 2, 3] is strictly equal to [1, 2, 3]', () => {
      assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
    });
  })
  describe('multi-layer arrays with nested arrays', () => {
    it('Tests that [[2, 3], [4]] is strictly equal to [[2, 3], [4]] and returns true', () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
    });
    it('Tests that [[2, 3], [4]] is not strictly equal to [[2, 3], [4, 5]] and returns false', () => {
      assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
    });
    it('Tests that [[2, 3], [4]] is not strictly equal to [[2, 3], 4] and returns false', () => {
      assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
    })
  });
})