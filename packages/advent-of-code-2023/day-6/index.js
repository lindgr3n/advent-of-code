const { readPuzzleInputAsArray } = require("../utils");
const { getDifferentWaysToWin } = require("./day-6");

// Fetch data input
readPuzzleInputAsArray({
  filename: "day-6/puzzle-input.txt",
  regexp: /(\n|\r)/g,
}).then((data) => {
  const times = data[0].match(/\d+/g).map(Number);
  const distances = data[1].match(/\d+/g).map(Number);
  const raceOne = getDifferentWaysToWin(times[0], distances[0]);
  const raceTwo = getDifferentWaysToWin(times[1], distances[1]);
  const raceThree = getDifferentWaysToWin(times[2], distances[2]);
  const raceFour = getDifferentWaysToWin(times[3], distances[3]);
  const result =
    raceOne.length * raceTwo.length * raceThree.length * raceFour.length;

  console.log("Day-6 Part one answer: ", result);

  /*
  Time:        59796575
  Distance:    597123410321328
  */
  const res = getDifferentWaysToWin(59796575, 597123410321328);
  console.log("Day-5 Part two answer: ", res.length);
});
