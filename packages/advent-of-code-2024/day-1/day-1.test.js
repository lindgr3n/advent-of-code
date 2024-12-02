const {
  calculateTotalDistance,
  calculateSimilarityScore
} = require("./day-1");

describe("Day 1", () => {
  it("should be defined", () => {
    expect(calculateTotalDistance).toBeDefined();
    expect(calculateSimilarityScore).toBeDefined();
  });

  it("should calculate the correct total distance", () => {
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];
    expect(calculateTotalDistance(leftList, rightList)).toEqual(11);
  });

  it("should calculate the correct similarity score", () => {
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];
    expect(calculateSimilarityScore(leftList, rightList)).toEqual(31);
  });
});