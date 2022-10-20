/* 
Pseudocode

Takes an array and a callback function


*/

const takeUntil = (array, callback) => {
  let outputArray = [];
  for (let i = 0; !callback(item), i++) {
    outputArray.push(array[i]);
  }
}