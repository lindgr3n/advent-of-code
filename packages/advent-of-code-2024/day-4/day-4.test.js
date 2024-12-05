const { countXMASOccurrences, countXMASPartTwoOccurrences, isWithinBounds, search } = require('./day-4');

test('isWithinBounds function test', () => {
  const grid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
  ];
  expect(isWithinBounds(grid, 1, 1)).toBe(true); // Checking 'E'
  expect(isWithinBounds(grid, -1, 1)).toBe(false); // Checking out of bounds (negative row index)
  expect(isWithinBounds(grid, 1, 3)).toBe(false); // Checking out of bounds (column index exceeds grid width)
  expect(isWithinBounds(grid, 3, 1)).toBe(false); // Checking out of bounds (row index exceeds grid height)
});


test('countXMASOccurrences example test', () => {
  const grid = [
    'MMMSXXMASM',
    'MSAMXMSMSA',
    'AMXSXMAAMM',
    'MSAMASMSMX',
    'XMASAMXAMM',
    'XXAMMXXAMA',
    'SMSMSASXSS',
    'SAXAMASAAA',
    'MAMMMXMMMM',
    'MXMXAXMASX'
  ].map(row => row.split(''));

  expect(countXMASOccurrences(grid)).toBe(18);
});

test('countXMASPartTwoOccurrences example test', () => {
  const grid = [
    '.M.S......',
    '..A..MSMS.',
    '.M.S.MAA..',
    '..A.ASMSM.',
    '.M.S.M....',
    '..........',
    'S.S.S.S.S.',
    '.A.A.A.A..',
    'M.M.M.M.M.',
    '..........'
  ].map(row => row.split(''));

  expect(countXMASPartTwoOccurrences(grid)).toBe(9);
});