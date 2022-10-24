const reverse = require('../index').reverse;
const assert = require('chai').assert;

describe('#reverse', () => {
  it('tests that reverse("abc") will return the string in reverse order', () => {
    assert.equal(reverse('abc'), 'cba');
  });
  it('tests that reverse("abc") will not return the string in reverse order', () => {
    assert.notEqual(reverse('abc'), 'abc');
  });
})