const findKeyByValue = function (object, target) {
  for (let key in object) {
    if (object[key] === target) return key;
  }
}

module.exports = findKeyByValue;