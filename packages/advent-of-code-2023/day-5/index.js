const { readPuzzleInputAsArray } = require("../utils");
const { findLowestLocation } = require("./day-5");

// Fetch data input
readPuzzleInputAsArray({
  filename: "day-5/puzzle-input.txt",
  regexp: /(\n|\r)/g,
}).then((data) => {
  const seedNumbers = [79, 14, 55, 13];
  const conversionMaps = [
    [50, 98, 2],
    [52, 50, 48],
    [0, 15, 37],
    [37, 52, 2],
    [39, 0, 15],
    [49, 53, 8],
    [0, 11, 42],
    [42, 0, 7],
    [57, 7, 4],
    [88, 18, 7],
    [18, 25, 70],
    [45, 77, 23],
    [81, 45, 19],
    [68, 64, 13],
    [0, 69, 1],
    [1, 0, 69],
    [60, 56, 37],
    [56, 93, 4],
  ];

  const lowestLocation = findLowestLocation(seedNumbers, conversionMaps);
  console.log("Lowest Location:", lowestLocation);
  //console.log("Day-5 Part one answer: ", sum);

  /*console.log(
    "Day-5 Part two answer: ",
    gamePowers.reduce((sum, power) => (sum += power), 0)
  );*/
});
