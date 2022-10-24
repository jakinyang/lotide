const assertObjectsEqual = require('../assertObjectsEqual');
/* 
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}); // Passes
assertObjectsEqual({a: 1, b: 2, d: 4}, {a: 1, b: 2, d: 4}); // Passes
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 5}); // Fails
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, d: 3}); // Fails 
*/