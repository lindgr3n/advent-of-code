 /**
  * [[0, 0], [2, 0]]
    [[1, -1], [1, 1]]
  * @param {*} param0 
  */
 function getIntersection({pathOne, pathTwo} = {}) {   
  //  console.log(pathOne, pathTwo);
   
  const [line1Start, line1End] = pathOne;
  const [line2Start, line2End] = pathTwo;

  const [line1StartX, line1StartY] = line1Start;
  const [line1EndX, line1EndY] = line1End;
  const [line2StartX, line2StartY] = line2Start;
  const [line2EndX, line2EndY] = line2End;

  // @author http://jsfiddle.net/justin_c_rounds/Gd2S2/light/
  // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
  var denominator, a, b, numerator1, numerator2, result = {
    x: null,
    y: null,
    onLine1: false,
    onLine2: false
  };
  denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
  if (denominator == 0) {
      return [];
  }
  a = line1StartY - line2StartY;
  b = line1StartX - line2StartX;
  numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
  numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
  a = numerator1 / denominator;
  b = numerator2 / denominator;

  // if we cast these lines infinitely in both directions, they intersect here:
  result.x = line1StartX + (a * (line1EndX - line1StartX));
  result.y = line1StartY + (a * (line1EndY - line1StartY));
  /*
      // it is worth noting that this should be the same as:
      x = line2StartX + (b * (line2EndX - line2StartX));
      y = line2StartX + (b * (line2EndY - line2StartY));
      */
  // if line1 is a segment and line2 is infinite, they intersect if:
  if (a > 0 && a < 1) {
      result.onLine1 = true;
  }
  // if line2 is a segment and line1 is infinite, they intersect if:
  if (b > 0 && b < 1) {
      result.onLine2 = true;
  }
  // if line1 and line2 are segments, they intersect if both of the above are true
  if(result.onLine1 && result.onLine2) {
    // console.log('FOUND!');
    
    return [result.x, result.y];
  }

  return []
 }

 function getIntersections({pathsOne, pathsTwo} = {}) {
  const paths = [];
  let stepsA = 0;
  let stepsB = 0;
  for (let a = 0; a < pathsOne.length-1; a++) {
    const pathAFrom = pathsOne[a];
    const pathATo = pathsOne[a+1];
    for (let b = 0; b < pathsTwo.length-1; b++) {
      const pathBFrom = pathsTwo[b];
      const pathBTo = pathsTwo[b+1];
      const result = getIntersection({pathOne: [pathAFrom, pathATo], pathTwo: [pathBFrom, pathBTo]})
      if(result.length === 2) {
        // console.log(result);
        // Print steps we got first intersection
        console.log('STEPS', stepsA, stepsB);
        paths.push(result)
      } else {
        // Add steps taken
        stepsA += getSteps(pathAFrom, pathATo)
        stepsB += getSteps(pathBFrom, pathBTo)
      }
    }
  }

  return paths;
 }

 function getSteps(pathAFrom, pathATo) {
  //  console.log(pathAFrom, pathATo);
   
  return Math.sqrt(Math.pow((pathATo[0] - pathAFrom[0]), 2) + Math.pow((pathATo[1] - pathAFrom[1]), 2))
 }

 function getShortestDistance(paths) {
  let shortest = []
  paths.forEach(path => {
    const [ax, ay] = path;
    const [maxx, maxy] = shortest

    if(!maxx) {
      shortest = [ax, ay];
    }

    if(ax + ay < maxx + maxy) {
      shortest = [ax, ay];
    }
  })
  return shortest;
 }

 function getPathCordinates({path} = {}) {
   let currentPoint = [0, 0]
  return path.reduce((paths, point) => {
    const direction = point.substring(0,1)
    const distance = point.substring(1)
    
    switch (direction) {
      case 'U':
        currentPoint[1] = currentPoint[1] + parseInt(distance, 10)
        break;
      case 'D':
        currentPoint[1] = currentPoint[1] - parseInt(distance, 10)
        break;
      case 'L':
        currentPoint[0] = currentPoint[0] - parseInt(distance, 10)
        break;
      case 'R':
        currentPoint[0] = currentPoint[0] + parseInt(distance, 10)
        break;
      default:
        break;
    }    
    paths.push([currentPoint[0], currentPoint[1]])
    return paths;
  }, [[0,0]])
 }

function manhattanDistance({pathOne, pathTwo} = {}) {
    const pathsOne = getPathCordinates({path: pathOne.split(/,/g)});
    const pathsTwo = getPathCordinates({path: pathTwo.split(/,/g)});

    const intersections = getIntersections({pathsOne, pathsTwo})    
    const shortestPoint = getShortestDistance(intersections)
    console.log(shortestPoint);
    const [a, b] = shortestPoint;
    return Math.abs(a) + Math.abs(b);
}

 module.exports = {getPathCordinates, getIntersection, getIntersections, getShortestDistance, manhattanDistance, getSteps}