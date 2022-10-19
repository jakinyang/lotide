const eqArrays = (arr1, arr2) => {
  // Check if lengths are the same?
  if (arr1.length !== arr2.length) return false;
  // Single loop to loop over both arrays - since both are the same length
  for (let i = 0; i < arr1.length; i++) {
    // Compare each value
    if (arr1[i] !== arr2[i]) return false; 
  }
  // If all comparisons pass without throwing false, return true
  return true;
}

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log(`🌲🌲🌲 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🍄🍄🍄 Assertion Failed: ${arr1} !== ${arr2}`);
}

const without = (array, targets) => {
  // Iterate through the elements in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, iterate over the targets
    for (let target of targets) {
      console.log(array);
      console.log(target);
      console.log(array[i]);
      // Compare each target to current element, if match, then splice
      if (array[i] === target) array.splice(i, 1);
      console.log(array);
    }
  }
  // After all targets matched to elements, return spliced array
  return array;
}

/* assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([3, 1, 3, 4, 1, 2, 3], [2, 5]), [3, 1, 3, 4, 1, 3]); */
assertArraysEqual(without([1, 3, 4, 1, 4, 1, 4, 1, 3, 2, 3], [1, 2, 3, 4]), []);