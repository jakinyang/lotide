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
let arg = process.argv.slice(2);

// Latinization function
// More verbose than needs to be, but it doesn't affect function and aids readability

const latinize = word => {
  // Convert to lowercase
  word = word.toLowerCase();
  // Transformed first letter
  let latinSuffix = `${word[0]}ay`;
  // 'Root' to attach the transformed first letter
  let latinRoot = word.slice(1);
  // Final latinized form
  let latinWord = `${latinRoot}${latinSuffix}`
  return latinWord;
}

// Tests
/* console.log(latinize('Pig'));
assertEqual(latinize('Pig'), 'igpay') */

// Applying latinize to each argument
// Output string to collect all 
let outputArr = [];
arg.forEach(word => {
  outputArr.push(latinize(word));
});
outputArr = outputArr.join(' ');
console.log(outputArr);