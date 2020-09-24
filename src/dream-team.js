const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
let result = "";
  members.forEach((elem) => {
    if (typeof elem === "string") {
      let item = elem.trim();
      if (item.length > 0) {
        result += item[0].toUpperCase();
      }
    }
  });
  return result ? result : false;
};
