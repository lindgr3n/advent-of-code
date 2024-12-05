function isWithinBounds(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

function search(grid, startX, startY, word, deltaX, deltaY) {
  const wordLength = word.length;
  for (let i = 0; i < wordLength; i++) {
    const newX = startX + i * deltaX;
    const newY = startY + i * deltaY;
    if (!isWithinBounds(grid, newX, newY) || grid[newX][newY] !== word[i]) {
      return false;
    }
  }
  return true;
}

function countXMASOccurrences(grid) {
  const directions = [
    [0, 1], [1, 0], [1, 1], [1, -1], 
    [0, -1], [-1, 0], [-1, -1], [-1, 1]
  ];
  const word = 'XMAS';
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      for (const [dx, dy] of directions) {
        if (search(grid, i, j, word, dx, dy)) {
          count++;
        }
      }
    }
  }

  return count;
}

function countXMASPartTwoOccurrences(grid) {
  let count = 0;
  // Ugly but working...
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'A') {
        if(row - 1 >= 0 && col - 1 >= 0 && row + 1 < grid.length && col + 1 < grid[0].length) {
          // Make it easy. Just check top left for M, top right for S, bottom left for M, bottom right for S
          const matchTopLeftToBottomRight = grid[row - 1][col - 1] === 'M' && grid[row + 1][col + 1] === 'S';
          const matchTopRightToBottomLeft = grid[row - 1][col + 1] === 'M' && grid[row + 1][col - 1] === 'S';
          const matchBottomLeftToTopRight = grid[row + 1][col - 1] === 'M' && grid[row - 1][col + 1] === 'S';
          const matchBottomRightToTopLeft = grid[row + 1][col + 1] === 'M' && grid[row - 1][col - 1] === 'S';
          
          if ((matchTopLeftToBottomRight || matchBottomRightToTopLeft) && (matchTopRightToBottomLeft || matchBottomLeftToTopRight)) {
            count++;
          }
        }
      }
    }
  }

  return count;
}

module.exports = { countXMASOccurrences, countXMASPartTwoOccurrences, isWithinBounds, search };