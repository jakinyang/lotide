/* 
Pseudocode

Takes an array and a callback function


*/

const takeUntil = (array, callback) => {
  let outputArray = [];
  for (let i = 0; !callback(array[i]); i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}

// For Testing
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

// Test data/cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);