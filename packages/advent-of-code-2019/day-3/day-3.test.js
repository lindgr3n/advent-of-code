const { getPathCordinates, getIntersection, getIntersections, getShortestDistance, manhattanDistance, getSteps } = require('./day-3')

describe('Day 3', () => {
  describe('getCordinates', () => {
    it('should be defined', () => {
      expect(getPathCordinates).toBeDefined();
    });

    it('should calculate correct', () => {
      expect(getPathCordinates({path: ['R8','U5','L5','D3']})).toEqual([[0,0], [8,0], [8,5], [3,5], [3,2]]);
      expect(getPathCordinates({path: ['U7','R6','D4','L4']})).toEqual([[0,0], [0,7], [6,7], [6,3], [2,3]]);
      
      expect(getPathCordinates({path: ['R75','D30']})).toEqual([[0,0], [75,0], [75,-30]]);
      expect(getPathCordinates({path: ['U62','R66']})).toEqual([[0,0], [0,62], [66,62]]);
    });
  });

  describe('getIntersection', () => {
    it('should be defined', () => {
      expect(getIntersection).toBeDefined();
    });
    
    it('should return correct intersection', () => {
      const lineOne = [[0, 0], [2, 0]];
      const lineTwo = [[1, -1], [1, 1]];
      expect(getIntersection({pathOne: lineOne, pathTwo: lineTwo})).toEqual([1, 0]);
      
      const lineThree = [[3, 5], [3, 2]];
      const lineFour = [[6, 3], [2, 3]];
      expect(getIntersection({pathOne: lineThree, pathTwo: lineFour})).toEqual([3, 3]);
      
      const line5A = [[ 3, 5 ], [ 3, 2 ]];
      const line5B = [[ 0, 7 ], [ 6, 7 ]];
      expect(getIntersection({pathOne: line5A, pathTwo: line5B})).toEqual([]);
    });
  });
  
  describe('getIntersections', () => {
    it('should be defined', () => {
      expect(getIntersections).toBeDefined();
    });

    it('should return correct intersections', () => {
      const lineOne = [[8,0], [8,5], [3,5], [3,2]];
      const lineTwo = [[0,7], [6,7], [6,3], [2,3]];
      expect(getIntersections({pathsOne: lineOne, pathsTwo: lineTwo})).toEqual([[6,5], [3,3]]);
    });
  });

  describe('getShortestDistance', () => {
    it('should be defined', () => {
      expect(getShortestDistance).toBeDefined();
    });

    it('should calculate shortest distance', () => {
      expect(getShortestDistance([[3,3], [6,5]])).toEqual([3,3]);
    });
  });

  describe('manhattanDistance', () => {
    it('should be defined', () => {
      expect(manhattanDistance).toBeDefined();
    });

    it('should calculate correct manhattanDistance', () => {
      const result = manhattanDistance({pathOne: 'R75,D30,R83,U83,L12,D49,R71,U7,L72', pathTwo: 'U62,R66,U55,R34,D71,R55,D58,R83'})
      expect(result).toEqual(170);  // 159?

      const resultTwo = manhattanDistance({pathOne: 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', pathTwo: 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'})
      expect(resultTwo).toEqual(135);
    });
  });

  describe('getSteps', () => {
    it('should be defined', () => {
      expect(getSteps).toBeDefined();
    });

    it('should calculate correct', () => {
      expect(getSteps([3,5], [8,5])).toEqual(5);
    });
  });
});