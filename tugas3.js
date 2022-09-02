const filterNumber = (lp, rp, arr) => {
  let result = [];

  if (lp >= rp)
    return console.log("Left point should be smaller than the right");
  if (arr.length < 6)
    return console.log("Array should contains at least 6 numbers");

  for (num of arr) {
    if (num > lp && num < rp) {
      result.push(num);
    }
  }

  if (result.length > 0) {
    result.sort((a, b) => a - b);
    return console.log(result);
  }

  return console.log("Data not found");
};

const numList = [-36, 49, 100, 1, 4, -9, 16, 25, 64, 81];
const leftPoint = -10;
const rightPoint = 10;

filterNumber(leftPoint, rightPoint, numList);
