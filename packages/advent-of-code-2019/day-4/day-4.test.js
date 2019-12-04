const {calculatePassword, gotIncreasingNumbers, gotDoubleDigits, gotUniqueDoubleDigits} = require('./day-4')
describe('Day 4', () => {
  it('should be defined', () => {
    expect(calculatePassword).toBeDefined();
  });

  it('should calculate not in range', () => {
    expect(calculatePassword({length: 6, range: {min: 111111, max: 111111}})).toEqual([111111]);
    expect(calculatePassword({length: 6, range: {min: 223450, max: 223450}})).toEqual([]);
    expect(calculatePassword({length: 6, range: {min: 123789, max: 123789}})).toEqual([]);
  });

  describe('gotIncreasin numbers', () => {
    it('should be defined', () => {
      expect(gotIncreasingNumbers).toBeDefined();
    });

    it('should calculate correct increasing numbers', () => {
      expect(gotIncreasingNumbers(111111)).toBeTruthy();
      expect(gotIncreasingNumbers(123456)).toBeTruthy();
      expect(gotIncreasingNumbers(110111)).not.toBeTruthy()
      expect(gotIncreasingNumbers(123450)).not.toBeTruthy()
    });
  });

  describe('gotDoubleDigits', () => {
    it('should be defined', () => {
      expect(gotDoubleDigits).toBeDefined();
    });

    it('should calculate correct double digits', () => {
      expect(gotDoubleDigits(111111)).toBeTruthy();
      expect(gotDoubleDigits(111223)).toBeTruthy();
      expect(gotDoubleDigits(123456)).not.toBeTruthy();
    });
  });

  describe('gotUniqueDoubleDigits', () => {
    it('should be defined', () => {
      expect(gotUniqueDoubleDigits).toBeDefined();
    });

    it('should caclculate correct sequence', () => {
      expect(gotUniqueDoubleDigits(112233)).toBeTruthy();
      expect(gotUniqueDoubleDigits(111122)).toBeTruthy();
      expect(gotUniqueDoubleDigits(245566)).toBeTruthy();
      expect(gotUniqueDoubleDigits(255666)).toBeTruthy();
      expect(gotUniqueDoubleDigits(123444)).not.toBeTruthy();
      expect(gotUniqueDoubleDigits(348999)).not.toBeTruthy();
      expect(gotUniqueDoubleDigits(599999)).not.toBeTruthy();
      expect(gotUniqueDoubleDigits(178889)).not.toBeTruthy();
    });
  });
});