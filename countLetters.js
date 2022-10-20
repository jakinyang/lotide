/*
Pseudocode

1. This will behave a lot like countOnly, except instead of iterating an array, it will iterate over a string.

2. Iterating over the string, conditionals will either instantiate that key-value as letter: 1, or it will increment it (++), just like in countOnly, except this one will not have a condition to count only specific letters/items.
*/

const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  charCountObj = {};
  for (let char of string) {
    charCountObj[char] ? charCountObj[char]++ : charCountObj[char] = 1;
  }
}

assertEqual(countLetters('abccba'), {a: 2, b: 2, c: 2});