const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🌲🌲🌲 Assertion Passed: ${actual} === ${expected}`) : console.log(`🍄🍄🍄 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  // Check if lengths are the same?
  if (arr1.length !== arr2.length) return "Array lengths unequal"
  // Single loop to loop over both arrays - since both are the same length
  for (let i = 0; i < arr1.length; i++) {
    // Check if both items at index are arrays
    if (Array.isArray(arr1[i]) !== Array.isArray(arr2[i])) return false;
    // If both are arrays, run eqArrays recursively
    if (Array.isArray(arr1[i])) {
      if (eqArrays(arr1[i], arr2[i]) !== true) return false;
    } else {
    // Compare each value
      if (arr1[i] !== arr2[i]) return false; 
    }
  }
  // If all comparisons pass without throwing false, return true
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual((eqArrays([[2, 3], [4]], [[2, 3], [4]])), true); // => true
assertEqual((eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])), false); // => false
assertEqual((eqArrays([[2, 3], [4]], [[2, 3], 4])), false); // => false