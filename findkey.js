/* 
Pseudocode

findKey takes an object and a callback.
It scans the object and return the key of the first key that the callback returns a truthy value

We'll need a loop that the limit is the callback evaluating as true
- While !callback(index) ==> keep looping
*/
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
}

module.exports = findKey;