const { readPuzzleInputAsArray } = require("../utils");
const {
  filterOutNumbers,
  calculateSum,
  replaceWordWithNumber,
  calculateSumWithWordsAndNumbers,
} = require("./day-1");

// Fetch data input
readPuzzleInputAsArray({ filename: "day-1/puzzle-input.txt" }).then((data) => {
  // Calculate all required fule for the modules
  console.log(data);
  const onlyNumbers = filterOutNumbers(data);
  const sum = calculateSum(onlyNumbers);
  console.log("Day-1 Part one answer: ", sum);

  const sumTwo = calculateSumWithWordsAndNumbers(data);
  console.log("Day-1 Part two answer: ", sumTwo);
});
