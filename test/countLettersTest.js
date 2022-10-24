const assert = require("chai").assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  const test1 = countLetters('abccba');
  const test2 = countLetters('aaabbbccc');
  const test3 = countLetters('zzabcab');
  assert.equal(test1.a, 2);
  assert.equal(test2.c, 3);
  assert.equal(test3.c, 1);
  it('Tests that the output object counts the number of a in "abccba" is 2', () => {
    assert.equal(test1.a, 2);
  });
  it('Tests that the output object counts the number of c in "aaabbbccc" is 3', () => {
    assert.equal(test2.c, 3);
  });
  it('Tests that the output object counts the number of c in "zzabcab" is 1', () => {
    assert.equal(test3.c, 1);
  });
  it('Tests that the output object counts the number of c in "aaabbbccc" is not 1', () => {
    assert.notEqual(test2.c, 1);
  });
  it('Tests that the output object counts the number of c in "zzabcab" is not 3', () => {
    assert.notEqual(test3.c, 3);
  });
})