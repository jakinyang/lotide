const countOnly = require ('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  describe('when the countOnly parameter is true', () => {
    it('Tests that the output object of countOnly results in counting Jason and count is 1', () => {
      assert.equal(result1["Jason"], 1);
    });
    it('Tests that the output object of countOnly results in counting Fang and count is 2', () => {
      assert.equal(result1["Fang"], 2);
    });
  })
  describe('when the countOnly parameter is false', () => {
    it('Tests that the output object of countOnly results in not counting Karima returning undefined', () => {
      assert.equal(result1["Karima"], undefined);
    });
    it('Tests that the output object of countOnly results in not counting Agouhanna returning undefined', () => {
      assert.equal(result1["Agouhanna"], undefined);
    });
  })
})