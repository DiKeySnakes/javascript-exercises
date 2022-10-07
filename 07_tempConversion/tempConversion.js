const ftoc = function (fTemp) {
  let result = (5 / 9) * (fTemp - 32);
  return parseFloat(result.toFixed(1));
};

const ctof = function (cTemp) {
  let result = (cTemp * 9) / 5 + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

console.log(ftoc(100));
console.log(ctof(73.2));
