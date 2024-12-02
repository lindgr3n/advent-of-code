const { countSafeReports, isSafeReport, isSafeWithDampener } = require("./day-2");

describe("Day 2", () => {
  it("should be defined", () => {
    expect(countSafeReports).toBeDefined();
    expect(isSafeReport).toBeDefined();
    expect(isSafeWithDampener).toBeDefined();
  });

  it("should count the correct number of safe reports for Part One", () => {
    const reports = [
      "7 6 4 2 1",
      "1 2 7 8 9",
      "9 7 6 2 1",
      "1 3 2 4 5",
      "8 6 4 4 1",
      "1 3 6 7 9"
    ];
    const safeReportsCountPartOne = reports.filter(report => {
      const levels = report.trim().split(/\s+/).map(Number);
      return isSafeReport(levels);
    }).length;
    expect(safeReportsCountPartOne).toEqual(2);
  });

  it("should count the correct number of safe reports with the Problem Dampener for Part Two", () => {
    const reports = [
      "7 6 4 2 1",
      "1 2 7 8 9",
      "9 7 6 2 1",
      "1 3 2 4 5",
      "8 6 4 4 1",
      "1 3 6 7 9"
    ];
    const safeReportsCountPartTwo = reports.filter(report => {
      const levels = report.trim().split(/\s+/).map(Number);
      return isSafeWithDampener(levels);
    }).length;
    expect(safeReportsCountPartTwo).toEqual(4);
  });
});