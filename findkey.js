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


// For testing
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 4 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 6 }
}, x => x.stars === 1) // => "noma"
const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 4 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 6 }
}, x => x.stars === 2) // => "noma"
const test3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 4 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 6 }
}, x => x.stars === 3) // => "noma"
const test4 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 4 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 6 }
}, x => x.stars === 4) // => "noma"

assertEqual(test1, 'Blue Hill');
assertEqual(test2, 'Akaleri');
assertEqual(test3, 'noma');
assertEqual(test4, 'elBulli');