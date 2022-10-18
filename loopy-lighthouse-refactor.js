const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = ''
    for (let j = 0; j < multiples.length; j++) {
      if (i % multiples[j] === 0) output += words[j];
    }
    console.log(output || i);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);