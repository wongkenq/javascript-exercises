const sumAll = function (start, end) {
  let small;
  let big;
  let sum;

  if (end < 0 || start < 0) {
    return "ERROR";
  } else if (typeof end !== "number" || typeof start !== "number") {
    return "ERROR";
  } else if (start > end) {
    small = end;
    big = start;
    sum = small;
  } else if (end > start) {
    small = start;
    big = end;
    sum = small;
  }

  for (let i = small + 1; i <= big; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
