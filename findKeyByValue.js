const findKeyByValue = function (object, target) {
  for (let key in object) {
    console.log(key);
    if (object[key] === target) return key;
  }
}

module.exports = findKeyByValue;