/* 
Pseudocode

1. Comparing objects will require iterating over keys, then comparing both keys, and the values therein.

2. In iterating over the values, if the value doesn't "catch" and return true, then it will have to default to return false

*/

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

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
   } else {
      if (!object2[key] || object1[key] !== object2[key]) return false;
   }
  }
  return true;
}

// Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false