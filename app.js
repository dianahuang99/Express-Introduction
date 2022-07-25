const express = require("express");
const ExpressError = require("./expressError");
const {
  getMean,
  getMedian,
  getMode,
  turnStringToIntArray,
} = require("./helpers");

const app = express();

app.get("/mean", function (req, res, next) {
  try {
    if (Object.keys(req.query).length === 0) {
      throw new ExpressError("nums are required", 400);
    }
    const numArrayString = req.query.nums.split(",");
    const numArray = turnStringToIntArray(numArrayString);
    const avg = getMean(numArray);
    return res.send(avg);
  } catch (e) {
    next(e);
  }
});

app.get("/median", function (req, res, next) {
  try {
    if (Object.keys(req.query).length === 0) {
      throw new ExpressError("nums are required", 400);
    }
    const numArrayString = req.query.nums.split(",");
    const numArray = turnStringToIntArray(numArrayString);
    const median = getMedian(numArray);
    return res.send(median);
  } catch (e) {
    next(e);
  }
});

app.get("/mode", function (req, res, next) {
  try {
    if (Object.keys(req.query).length === 0) {
      throw new ExpressError("nums are required", 400);
    }
    const numArrayString = req.query.nums.split(",");
    const numArray = turnStringToIntArray(numArrayString);
    const mode = getMode(numArray);
    return res.send(mode);
  } catch (e) {
    next(e);
  }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

// Error handler
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
