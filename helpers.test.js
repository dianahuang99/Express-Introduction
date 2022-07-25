const {
  getMean,
  getMedian,
  getMode,
  turnStringToIntArray,
} = require("./helpers");

// describe("get mean function", function () {
//   test("return mean", function () {
//     let mean = getMean([2, 3, 6, 9, 10]);
//     expect(mean).toEqual("6");
//   });

//   test("400 not a number", function () {
//     let mean = getMean([2, 3, 6, 9, 10]);
//     expect(mean).toEqual("6");
//   });
// });

describe("#findMedian", function () {
  it("finds the median of an even set", function () {
    expect(getMedian([1, -1, 4, 2])).toEqual("1.5");
  });
  it("finds the median of an odd set", function () {
    expect(getMedian([1, -1, 4])).toEqual("1");
  });
});

describe("#findMean", function () {
  it("finds the mean of an empty array", function () {
    expect(getMean([])).toEqual("0");
  });
  it("finds the mean of an array of numbers", function () {
    expect(getMean([1, -1, 4, 2])).toEqual("1.5");
  });
});

describe("#findMode", function () {
  it("finds the mode", function () {
    expect(getMode([1, 1, 1, 2, 2, 3])).toEqual("1");
  });
});
