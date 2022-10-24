const takeUntil = require('../index').takeUntil;
const assert = require('chai').assert;

describe('#takeUntil', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  it('returns a section of an array until a callback function is satisfied: x => x < 0', () => {
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
  it('returns a section of an array until a callback function is satisfied: x => x === ","', () => {
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
})