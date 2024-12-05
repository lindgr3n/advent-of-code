const { readPuzzleInput } = require("../utils");
const { countXMASOccurrences, countXMASPartTwoOccurrences } = require("./day-4");

// Fetch data input
readPuzzleInput({ filename: "day-4/puzzle-input.txt" }).then((data) => {
  const grid = data.split('\n').map(row => row.split(''));
  const partOneResult = countXMASOccurrences(grid);
  console.log("Day-4 part one answer: ", partOneResult);  // 2578

  const partTwoResult = countXMASPartTwoOccurrences(grid);
  console.log("Day-4 part two answer: ", partTwoResult);  // 1972
});