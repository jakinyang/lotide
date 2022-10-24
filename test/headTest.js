const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('Tests that the output of head([1, 2, 3]) is strictly equal to 1', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('Tests that the output of head(["Hello", "World", "Again"]) is strictly equal to "hello"', () => {
    assert.strictEqual(head(["Hello", "World", "Again"]), "Hello");
  });
  })