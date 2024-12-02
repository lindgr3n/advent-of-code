const ACCELERATION = 1;
/*
 Each second hold we increase the speed
 1ms => 1mm/ms
 2ms => 2mm/ms
 3ms => 3mm/ms
*/
function isRaceIsAWin(timeHoldingButton, totalTime, distanceToBeat) {
  //
  const speed = timeHoldingButton * ACCELERATION;
  const timeLeft = totalTime - timeHoldingButton;
  const distance = speed * timeLeft;
  return distanceToBeat < distance;
}
function getDifferentWaysToWin(totalTime, maxDistance) {
  const waysOfWinning = [];
  for (let time = 0; time <= totalTime; time++) {
    let isWin = isRaceIsAWin(time, totalTime, maxDistance);
    if (isWin) {
      waysOfWinning.push(time);
    }
  }

  return waysOfWinning;
}
module.exports = { isRaceIsAWin, getDifferentWaysToWin };
