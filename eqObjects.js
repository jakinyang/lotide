/* 
Pseudocode

1. Comparing objects will require iterating over keys, then comparing both keys, and the values therein.

2. In iterating over the values, if the value doesn't "catch" and return true, then it will have to default to return false

*/

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function (object1, object2) {
  for (let key in object1) {
    console.log(key);
    console.log(object2[key]);
    console.log(object1[key]);
    if (object2[key] && object1[key] === object2[key]) {
      return true
    }
    return false;
  }
}

// Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false