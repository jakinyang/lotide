const tail = require ('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('Tests that the output of tail([1, 2, 3]) is strictly equal to [2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('Tests that the output of tail(["Hello", "World", "Again"]) is strictly equal to ["World", "Again"]', () => {
    assert.deepEqual(tail(["Hello", "World", "Again"]), ["World", "Again"]);
  });
  it('Tests that the output of tail([1, 2, 3]) is strictly not equal to [3]', () => {
    assert.notDeepEqual(tail([1, 2, 3]), [3]);
  });
  it('Tests that the output of tail(["Hello", "World", "Again"]) is strictly not equal to ["Again"]', () => {
    assert.notDeepEqual(tail(["Hello", "World", "Again"]), ["Again"]);
  });
  describe('tail does not mutate arrays', () => {
    const words = ["a", "b", "c"];
    tail(words);
    words.length, 3
    it('Tests that tail does not change length of original array', () => {
      assert.equal(words.length, 3);
    });
  })
})