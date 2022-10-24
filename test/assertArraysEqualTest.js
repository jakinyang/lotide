const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);      // => Passes
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);  // => Passes
assertArraysEqual([1, 2, 3], [1, 2, 4]);      // => Fails
assertArraysEqual(["a", "b", "c"], ["a", "b", "d"]);  // => Fails
 