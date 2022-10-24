const isEven = require('./isEven');

const middle = function(array) {
  let returnArray = new Array;
  let middle = Math.floor(array.length/2);
  if (array.length < 3) return returnArray;
  if (isEven(array.length)) {
    // Grab two middle variables
    returnArray.push(array[middle - 1], array[middle]);
  } else {
    // Grab single middle variable
    returnArray.push(array[middle]);
  }
  return returnArray;
}

module.exports = middle;