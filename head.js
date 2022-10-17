const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

const head = (array) => {
  return array.shift();
};

assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["Hello", "World", "Again"]), "Hello");