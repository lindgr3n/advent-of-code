const { calculateRequiredFuel, calculateModules } = require("./day-1");
describe('Day 1', () => {
    it('should be defined', () => {
        expect(calculateRequiredFuel).toBeDefined();
        expect(calculateModules).toBeDefined();
    });

    it('should calculate correct values', () => {
        // For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
        expect(calculateRequiredFuel({ mass: 12 })).toEqual(2);
        // For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
        expect(calculateRequiredFuel({ mass: 14 })).toEqual(2);
        // For a mass of 1969, the fuel required is 654.
        expect(calculateRequiredFuel({ mass: 1969 })).toEqual(654);
        // For a mass of 100756, the fuel required is 33583.
        expect(calculateRequiredFuel({ mass: 100756 })).toEqual(33583);

    });

    it('should calculate correct modules', () => {
        expect(calculateModules({ modules: [12, 14] })).toEqual(4);
        expect(calculateModules({ modules: [12, 14, 1969] })).toEqual(658);
    });
});