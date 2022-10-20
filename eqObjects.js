/* 
Pseudocode

1. Comparing objects will require iterating over keys, then comparing both keys, and the values therein.


*/

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};