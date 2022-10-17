// Copy-pasted assertEqual function
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

// Tail function
const tail = (array) => {
  return array.slice(1);
};

// Test function calls assertEqual not on the array returned by tail, but on the values extracted by the for loop against the value extracted from the "expected" array. I.e. i = 0, j = 0 ... assertEqual(tail[0], expected[0])
const testFunction = (tail, expected) => {
  let j = 0;
  for (let i = 0; i < tail.length; i++) {
    assertEqual(tail[i], expected[j]);
    j++;
  }
};

// Calling test function to test tail as opposed to calling assertEqual directly
testFunction(tail([1, 2, 3]), [2, 3]);
testFunction(tail(["Hello", "World", "Again"]), ["World", "Again"]);

// Additional test cases
const words = ["a", "b", "c"];
tail(words);
assertEqual(words.length, 3);