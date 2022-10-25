const add = function (value1, value2) {
  let result = value1 + value2;
  result = Number(result);
  return result;
};

const subtract = function (value1, value2) {
  let result = value1 - value2;
  result = Number(result);
  return result;
};

const sum = function (array) {
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};

const multiply = function (array) {
  const result = array.reduce((partialResult, a) => partialResult * a, 1);
  return result;
};

const power = function (a, b) {
  let result = Math.pow(a, b);
  return result;
};

const factorial = function (n) {
  let result = 1;
  if (n <= 0) {
    return 1;
  }
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
