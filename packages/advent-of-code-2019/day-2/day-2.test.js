const { opCodeCalculator } = require('./day-2')
describe('Day 2', () => {
    it('should be defined', () => {
        expect(opCodeCalculator).toBeDefined();
    });

    it('should calculate correct values', () => {
        expect(opCodeCalculator([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
        expect(opCodeCalculator([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
        expect(opCodeCalculator([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
        expect(opCodeCalculator([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
        expect(opCodeCalculator([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
    });
});