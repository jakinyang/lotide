/* 
Pseudocode

1. Comparing objects will require iterating over keys, then comparing both keys, and the values therein.

2. In iterating over the values, if the value doesn't "catch" and return true, then it will have to default to return false

*/
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (!object2[key]) return false;
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) !== true) return false;
    } else if (typeof object1[key] === 'object') {
      if (eqObjects(object1[key], object2[key]) !== true) return false;
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
}

module.exports = eqObjects;