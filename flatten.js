/* 
Flatten takes an array of arrays (varying levels and then returns an array with only one level with all the values.

1. We need an iterator module that will iterate over an array
- this module needs to push the values to an output array (that will be the final 'flattened' array)
2. We need to set it up that this will iterate ever single time it encounters an array
- this will require determining if there is an array = another module for checking if it is an array
- if it is an array - call the iterator function to iterate over it
- if not, push values to output array
*/


// This might be unnecessary
// But it keeps things modular™
const arrayIdentifier = (item) => {
  return Array.isArray(item);
}

// The iterator module
const arrayIterator = (array, output) => {
  // Iterate over the array
  for(let i = 0; i < array.length; i++) {
    // As it iterates, if encounters nested array
    if(arrayIdentifier(array[i])) {
      // Recursion: call function within itself
      // This way any nested arrays within the array will be iterated
      arrayIterator(array[i], output);
    } else {
      // If not an array, simply push array element to the output
      output.push(array[i]);
    }
  }
}

// Flatten that will call submodules together
const flatten = (array) => {
  let outputArray = [];
  // Initial test for array - this might be unnecessary
  if (arrayIdentifier(array)) {
    // Call recursive arrayIterator, output to outputArray
    arrayIterator(array, outputArray);
  }
  return outputArray;
}


// Tests
/* 
console.log(flatten([1, 2, 3, 4, [1, 3], 4, 5]));
console.log(flatten([1, 2, 3, 4, [1, [1, 2, [1, 2, 3, 4],3, 4],3], 4, 5, [1, 2, 3, 4, [1, 2, 3, 4], 1], 3]));
 */