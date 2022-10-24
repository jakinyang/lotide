const map = require('../index').map;
const assert = require('chai').assert;

describe('#map', () => {
  const words = ["ground", "control", "tof", "major", "tom"];
  const results1 = map(words, word => word[0]);
  const results2 = map(words, word => word[1]);
  const results3 = map(words, word => word[2]); 
  it('Tests that the output of map(words) with a call back function returning word[0] is strictly equal to an an array of the first letter of each word', () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it('Tests that the output of map(words) with a call back function returning word[1] is strictly equal to an an array of the first letter of each word', () => {
    assert.deepEqual(results2, ['r', 'o', 'o', 'a', 'o']);
  });
  it('Tests that the output of map(words) with a call back function returning word[2] is not equal to an an array of the first letter of each word', () => {
    assert.notDeepEqual(results3, ['g', 'c', 't', 'm', 't']);
  });
})