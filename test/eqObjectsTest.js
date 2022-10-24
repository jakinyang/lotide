const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const de = { d: "1", e: {a: 1, b: 2} };
  const ed = { e: {a: 1, b: 2}, d: "1" };
  const de2 = { d: "1", e:{a: 1, b: 2, c: 3} };
  describe('single layer objects', () => {
    it('Tests that { a: "1", b: "2" } is strictly equal to { b: "2", a: "1" } and returns true', () => {
      assert.isTrue(eqObjects(ab, ba));
    });
    it('Tests that { a: "1", b: "2" } is strictly not equal to { a: "1", b: "2", c: "3" } and returns false', () => {
      assert.isFalse(eqObjects(ab, abc));
    });
  })
  describe('multi-layer objects with nested arrays', () => {
    it('Tests that { c: "1", d: ["2", 3] } is strictly equal to { d: ["2", 3], c: "1" } and returns true', () => {
      assert.isTrue(eqObjects(cd, dc));
    });
    it('Tests that { c: "1", d: ["2", 3] } is not strictly equal to { c: "1", d: ["2", 3, 4] } and returns false', () => {
      assert.isFalse(eqObjects(cd, cd2));
    });
  })
  describe('multi-layer objects with nested objects', () => {
    it('Tests that { d: "1", e: {a: 1, b: 2} } is strictly equal to { e: {a: 1, b: 2}, d: "1" } and returns true', () => {
      assert.isTrue(eqObjects(de, ed));
    });
    it('Tests that { d: "1", e: {a: 1, b: 2} } is not strictly equal to { d: "1", e:{a: 1, b: 2, c: 3} } and returns false', () => {
      assert.isFalse(eqObjects(de, de2));
    });
  })
})