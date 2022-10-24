/* 
Pseudocode

This will likely follow the same process as assertArraysEqual
*/

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`🌲🌲🌲 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🍄🍄🍄 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

module.exports = assertObjectsEqual;