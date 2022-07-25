const express = require("express");
const ExpressError = require("./expressError");

const app = express();

app.get("/mean", function (req, res, next) {
  try {
    if (Object.keys(req.query).length === 0) {
      throw new ExpressError("nums are required", 400);
    }
    const numArray = req.query.nums.split(",");
    let total = 0;
    for (let stringNum of numArray) {
      const num = parseInt(stringNum);
      if (!num) {
        throw new ExpressError(`${stringNum} is not a number`, 400);
      }
      total += num;
    }
    const avg = total / numArray.length;
    res.send(String(avg));
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
    const numArray = [];

    for (let stringNum of numArrayString) {
      const num = parseInt(stringNum);
      if (!num) {
        throw new ExpressError(`${stringNum} is not a number`, 400);
      }
      numArray.push(num);
    }

    const mid = Math.floor(numArray.length / 2);
    const nums = [...numArray].sort((a, b) => a - b);

    if (nums.length % 2 !== 0) {
      res.send(`${nums[mid]}`);
    } else {
      res.send(`${(nums[mid - 1] + nums[mid]) / 2}`);
    }
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
    const numArray = [];

    for (let stringNum of numArrayString) {
      const num = parseInt(stringNum);
      if (!num) {
        throw new ExpressError(`${stringNum} is not a number`, 400);
      }
      numArray.push(num);
    }

    res.send(
      `${numArray
        .sort(
          (a, b) =>
            numArray.filter((v) => v === a).length -
            numArray.filter((v) => v === b).length
        )
        .pop()}`
    );
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
