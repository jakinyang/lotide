const without = (array, targets) => {
  // Output array to modify
  let outputArray = Array.from(array);
  // Iterate through the elements in the array
  for (let target of targets) {
  // For each element, iterate over the targets
    for (let i = 0; i < outputArray.length; i++) {  
      // Compare each target to current element, if match, then splice
      if (outputArray[i] === target) {
        outputArray.splice(i, 1);
        // Decrement index counter to account for shortened array length after splice
        i--;
      }
    }
  }
  // After all targets matched to elements, return spliced array
  return outputArray;
}

module.exports = without;