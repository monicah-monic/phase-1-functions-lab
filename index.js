// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const hq = 42;
  return Math.abs(street - hq);
}

function distanceFromHqInFeet(street) {
  const block = distanceFromHqInBlocks(street);
  return block * 264;
}

function distanceTravelledInFeet(start, end) {
  const distanceTravelledInFeet = Math.abs(end - start);
  return distanceTravelledInFeet * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
