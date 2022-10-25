const palindromes = function (str) {
  let sentence = str.replace(/[\W_]/g, '');
  console.log(sentence);
  for (let i = 0, count = sentence.length - 1; i < count / 2; i++) {
    if (sentence[i].toLowerCase() !== sentence[count - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
