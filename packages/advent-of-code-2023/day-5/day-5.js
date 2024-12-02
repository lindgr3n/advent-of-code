/*
  target start, source start, length
  target start range, source start range, length

  50 98 2
  52 50 48

  
*/

function findLowestLocation(seedNumbers, conversionMaps) {
  let currentNumbers = seedNumbers;

  for (const map of conversionMaps) {
    const destinationRangeStart = map[0];
    const sourceRangeStart = map[1];
    const rangeLength = map[2];

    const convertedNumbers = currentNumbers.map((seed) => {
      if (seed >= sourceRangeStart && seed < sourceRangeStart + rangeLength) {
        const offset = seed - sourceRangeStart;
        return destinationRangeStart + offset;
      } else {
        return seed;
      }
    });

    currentNumbers = convertedNumbers;
  }

  return Math.min(...currentNumbers);
}
module.exports = { findLowestLocation };
