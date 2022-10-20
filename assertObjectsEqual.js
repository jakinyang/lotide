/* 
Pseudocode

This will likely follow the same process as assertArraysEqual


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

const eqArrays = (arr1, arr2) => {
  // Check if lengths are the same?
  if (arr1.length !== arr2.length) return "Array lengths unequal"
  // Single loop to loop over both arrays - since both are the same length
  for (let i = 0; i < arr1.length; i++) {
    // Compare each value
    if (arr1[i] !== arr2[i]) return false; 
  }
  // If all comparisons pass without throwing false, return true
  return true;
}

const eqObjects = function (object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!object2[key] || eqArrays(object1[key], object2[key]) !== true) return false;
    } else if (typeof object1[key] === 'object') {
      if (!object2[key] || eqObjects(object1[key], object2[key]) !== true) return false;
    } else {
      if (!object2[key] || object1[key] !== object2[key]) return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  eqObjects(actual, expected) ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
}

// Tests

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});