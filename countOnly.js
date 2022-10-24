/* 
Pseudocode
1. countOnly takes a collection of info (array), and returns a count of a subset of that info (number)
- this sounds something like if(isValidInfo) counter++ ==> return counter
2. 
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true) results[item] ? results[item]++ : results[item] = 1;
  }
  return results;
}

module.exports = countOnly;