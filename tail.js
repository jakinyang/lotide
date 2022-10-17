const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (array) => {
  array.splice(1, array.length);
}

tail([1, 2, 3, 4, 5]);
tail(["a", "b", "c", "d"]);