/* 
Pseudocode

Two arguments: array, function
performs function on each element of array
*/

const map = (array, callback) => {
  let outputArray = [];
  for (let item of array) outputArray.push(callback(item));
  return outputArray;
}

module.exports = map;
