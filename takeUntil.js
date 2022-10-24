/* 
Pseudocode

Takes an array and a callback function
*/

const takeUntil = (array, callback) => {
  let outputArray = [];
  for (let i = 0; !callback(array[i]); i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}

module.exports = takeUntil;