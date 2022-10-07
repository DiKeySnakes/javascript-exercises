const reverseString = function (string) {
  let result = '';
  if (string === '') return '';
  result = string.split('').reverse().join('');
  return result;
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString('Hello World!'));
