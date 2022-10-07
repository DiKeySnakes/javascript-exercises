const sumAll = function (num1, num2) {
  let startNum;
  let endNum;
  if (num1 === num2) return num1;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (num1 > num2) {
    startNum = num2;
    endNum = num1;
  } else {
    startNum = num1;
    endNum = num2;
  }

  let result = startNum;
  for (let i = 1; i <= Math.abs(endNum - startNum); i++) {
    result = result + (startNum + i);
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
