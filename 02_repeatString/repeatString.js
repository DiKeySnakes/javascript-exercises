const repeatString = function (string, num) {
  let result = '';
  if (string === '') return '';
  if (num === 0) return '';
  if (num < 0) return 'ERROR';
  for (let i = 0; i < num; i++) {
    result = result + string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

// console.log(repeatString('hey', -1));
