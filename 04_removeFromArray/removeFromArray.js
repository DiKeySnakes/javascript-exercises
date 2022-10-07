const removeFromArray = function (array, ...theArgs) {
  let result;
  let filtered = array;
  let args = Array.from(theArgs);
  for (let arg of args) {
    result = filtered.filter((elem) => elem !== arg);
    filtered = result;
  }
  console.log(args);
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3, 4], 3));
