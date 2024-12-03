const { extractMulInstructions, sumMulInstructions, extractMulInstructionsWithConditions } = require("./day-3");

describe("Day 3", () => {
  it("should extract valid mul instructions", () => {
    const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    const expected = [8, 25, 88, 40];
    expect(extractMulInstructions(input)).toEqual(expected);
  });

  it("should sum the results of valid mul instructions", () => {
    const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    const expected = 161;
    expect(sumMulInstructions(input)).toEqual(expected);
  });

  it("should extract valid mul instructions with conditions", () => {
    const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
    const expected = [8, 40];
    expect(extractMulInstructionsWithConditions(input)).toEqual(expected);
  });

  it("should sum the results of valid mul instructions with conditions", () => {
    const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
    const expected = 48;
    const instructions = extractMulInstructionsWithConditions(input);
    const result = instructions.reduce((sum, value) => sum + value, 0);
    expect(result).toEqual(expected);
  });
});