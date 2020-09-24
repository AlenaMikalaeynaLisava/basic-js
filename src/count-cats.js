const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  
 let sum = 0;
  backyard.forEach((elem) => {
    elem.forEach((elem) => {
      if ("^^" === elem) {
        sum++;
      }
    });
  });
  return sum;
};
