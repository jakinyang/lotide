/*
Calling the function in node with arguments inputs those arguments into the function.

This will probably require using command line arguments

Will need to save the arguments put in to a variable, then implement the string reverse function on each item in that variable/array.
*/

const reverse = (string) => {
  let reverseWord = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseWord += `${string[i]}`;
  }
  return reverseWord;
};

module.exports = reverse;

