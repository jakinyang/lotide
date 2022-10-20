/* 
Pseudocode

1. 
*/

const eqArrays = (arr1, arr2) => {
  // Check if lengths are the same?
  if (arr1.length !== arr2.length) return false;
  // Single loop to loop over both arrays - since both are the same length
  for (let i = 0; i < arr1.length; i++) {
    // Compare each value
    if (arr1[i] !== arr2[i]) return false;
  }
  // If all comparisons pass without throwing false, return true
  return true;
}

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log(`🌲🌲🌲 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🍄🍄🍄 Assertion Failed: ${arr1} !== ${arr2}`);
}

const letterPositions = function (string) {
  charPositionObj = {};
  for (let index in string) {
    // charPositionObj[char] ? charPositionObj[char].push(String.indexOf(char)) : charPositionObj[char] = 1;
    console.log(index);
  }
  return charPositionObj;
}

// Tests
const test1 = letterPositions('abccba');
const test2 = letterPositions('aaabbbccc');
const test3 = letterPositions('zzabcab');
assertArraysEqual(test1.a, 2);
assertArraysEqual(test2.c, 3);
assertArraysEqual(test3.c, 1);