const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.log(`Assertion Failed: ${actual} !== ${expected}`)
}

assertEqual("a", "b");
assertEqual(1, 1);
assertEqual('a', 'a');
assertEqual(1, 2);