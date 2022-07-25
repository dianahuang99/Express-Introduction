function getMean(numArray) {
  if (numArray.length === 0) {
    return "0";
  }
  let total = 0;
  for (let num of numArray) {
    total += num;
  }
  const avg = total / numArray.length;
  return `${avg}`;
}

function getMedian(numArray) {
  const mid = Math.floor(numArray.length / 2);
  const nums = [...numArray].sort((a, b) => a - b);

  if (nums.length % 2 !== 0) {
    return `${nums[mid]}`;
  } else {
    return `${(nums[mid - 1] + nums[mid]) / 2}`;
  }
}

function getMode(numArray) {
  return `${numArray
    .sort(
      (a, b) =>
        numArray.filter((v) => v === a).length -
        numArray.filter((v) => v === b).length
    )
    .pop()}`;
}

function turnStringToIntArray(numArrayString) {
  const numArray = [];

  for (let stringNum of numArrayString) {
    const num = parseInt(stringNum);
    if (!num) {
      throw new ExpressError(`${stringNum} is not a number`, 400);
    }
    numArray.push(num);
  }
  return numArray;
}

module.exports = {
  getMean,
  getMedian,
  getMode,
  turnStringToIntArray,
};
