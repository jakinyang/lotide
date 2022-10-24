const letterPositions = require ('../letterPositions');
const assert = require('chai').assert;

// Tests
describe('#letterPositions', () => {
  const test1 = letterPositions('abccba');
  const test2 = letterPositions('aaabbbccc');
  const test3 = letterPositions('zzabcab');
  it('returns an object of arrays of the indices of letters', () => {
    assert.deepEqual(test1.a, [0, 5]);
  });
  it('returns an object of arrays of the indeces of letters', () => {
    assert.deepEqual(test2.c, [6, 7, 8]);
  });
  it('returns an object of arrays of the indeces of letters', () => {
    assert.notDeepEqual(test3.c, [5]);
  });
})