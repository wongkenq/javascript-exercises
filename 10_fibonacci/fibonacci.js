const fibonacci = function (num) {
  let arr = [0, 1];

  if (typeof num === "string") {
    num = Number(num);
  }
  if (num < 0) return "OOPS";
  else {
    for (let i = 2; i <= num; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }

    return arr[num];
  }
};
// Do not edit below this line
module.exports = fibonacci;
