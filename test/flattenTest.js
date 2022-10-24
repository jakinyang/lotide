const flatten = require ('../flatten').flatten;
const assert = require('chai').assert;

describe('#flatten', () => {
  const dataA = [1, 2, 3, 4, [1, 3], 4, 5];
  const dataAFlat = [1, 2, 3, 4, 1, 3, 4, 5];
  const dataB = [1, 2, 3, 4, [1, [1, 2, [1, 2, 3, 4],3, 4],3], 4, 5, [1, 2, 3, 4, [1, 2, 3, 4], 1], 3];
  const dataBFlat = [1, 2, 3, 4, 1, 1, 2, 1, 2, 3, 4, 3, 4, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 4, 1, 3];
  const test1 = flatten(dataA);
  const test2 =  flatten(dataB);
  it('flattens one layer of nested arrays', () => {
    assert.deepEqual(test1, dataAFlat);
  });
  it('flattens multiple layers of nested arrays', () => {
    assert.deepEqual(test2, dataBFlat);
  });
})