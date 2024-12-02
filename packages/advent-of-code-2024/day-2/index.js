const { readPuzzleInputAsArray } = require("../utils");
const { countSafeReports, isSafeReport, isSafeWithDampener } = require("./day-2");

// Fetch data input
readPuzzleInputAsArray({ filename: "day-2/puzzle-input.txt" }).then((data) => {
  const reports = data.map(row => row.trim().split(/\s+/).map(Number));

  // Part One: Count safe reports without the Problem Dampener
  const safeReportsCountPartOne = reports.filter(isSafeReport).length;
  console.log("Day-2 Part one answer: ", safeReportsCountPartOne);  // 321

  // Part Two: Count safe reports with the Problem Dampener
  const safeReportsCountPartTwo = reports.filter(isSafeWithDampener).length;
  console.log("Day-2 Part two answer: ", safeReportsCountPartTwo);  // 386
});