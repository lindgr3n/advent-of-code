const {
  filterOutNumbers,
  calculateSum,
  matchingNumber,
  matchingNumberReverse,
  calculateSumWithWordsAndNumbers,
} = require("./day-1");

describe("Day 1", () => {
  it("should be defined", () => {
    expect(filterOutNumbers).toBeDefined();
    expect(calculateSum).toBeDefined();
  });

  it("should filter out correct numbers", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const expected = [["1", "2"], ["3", "8"], ["1", "2", "3", "4", "5"], ["7"]];
    expect(filterOutNumbers(input)).toEqual(expected);
  });

  it("should calculate first and last number", () => {
    const input = [["1", "2"], ["3", "8"], ["1", "2", "3", "4", "5"], ["7"]];
    expect(calculateSum(input)).toEqual(142);
  });

  it("should return correct number", () => {
    expect(matchingNumber("one23")).toEqual(1);
    expect(matchingNumber("2one23")).toEqual(2);
    expect(matchingNumber("abtwo3")).toEqual(2);
    expect(matchingNumber("abc2def")).toEqual(2);

    expect(matchingNumberReverse("one23")).toEqual(3);
    expect(matchingNumberReverse("2one2three")).toEqual(3);
    expect(matchingNumberReverse("abtwo3abone")).toEqual(1);
    expect(matchingNumberReverse("abc2def")).toEqual(2);
  });

  it("should calculate correct numbers and words", () => {
    const input = ["two1nine", "eightwothree"];
    const expected = 29 + 83;
    expect(calculateSumWithWordsAndNumbers(input)).toEqual(expected);
  });
});
