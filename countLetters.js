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
  return charCountObj;
}

// Tests
const test1 = countLetters('abccba');
const test2 = countLetters('aaabbbccc');
const test3 = countLetters('zzabcab');
assertEqual(test1.a, 2);
assertEqual(test2.c, 3);
assertEqual(test3.c, 1);