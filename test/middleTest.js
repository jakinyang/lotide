const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {
  it('Tests that the output of middle([1]) is strictly equal to an emtpy array []', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('Tests that the output of middle([1, 2]) is strictly equal to an empty array []', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('Tests that the output of middle([1, 2, 3]) is strictly equal to [2]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('Tests that the output of middle([1, 2, 3, 4]) is strictly equal to [2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
})