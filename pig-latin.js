/* 
Pig latin will require:

a) to take input from node.js arguments as process.argv

b) Take first letter of each word/argument
- extract first letter
- append 'ay'
- append pig-latinized first letter to the end of original word/argument

c) Perform latinization for each word

d) Output all latinized words
*/

// Copy-paste for testing purposes
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

// Extracts the relevant arguments into an array
const arg = process.argv.slice(2);


