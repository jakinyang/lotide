/*
Calling the function in node with arguments inputs those arguments into the function.

This will probably require using command line arguments

Will need to save the arguments put in to a variable, then implement the string reverse function on each item in that variable/array.
*/
// assertEqual for testing purposes
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};


// Extracts the relevant arguments into an array
const arg = process.argv.slice(2);

// Test arg array holds correct variables
// console.log(arg);

// String reversing function
const reverse = (string) => {
  let reverseWord = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseWord += `${string[i]}`;
  }
  return reverseWord;
};

// Test for array
/* console.log(reverse('abc'));
assertEqual(reverse('abc'), 'cba'); */

// Running reverse() on each element in arg
arg.forEach(element => {
  console.log(reverse(element));
});


