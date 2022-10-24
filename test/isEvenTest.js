const isEven = require ('../isEven');
const assert = require('chai').assert;

describe('#isEven', () => {
  it('returns true if number is even', () => {
    assert.isTrue(isEven(2));
  });
  it('returns false if number is odd', () => {
    assert.isFalse(isEven(3));
  });
})