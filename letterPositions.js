const letterPositions = function (string) {
  charPositionObj = {};
  for (let i in string) {
    charPositionObj[string[i]] ? charPositionObj[string[i]].push(Number(i)) : charPositionObj[string[i]] = [Number(i)];
  }
  return charPositionObj;
}

module.exports = letterPositions;