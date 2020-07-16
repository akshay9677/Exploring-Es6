const obj = {
  templateLiterals: function (n) {
    var a = `Hello ${n}`;
    return a;
  },
  taggedLiterals: function (str, ...values) {
    let result = str[0];
    values.forEach((val, i) => {
      result = result + val;
      result = result + str[i + 1];
    });
    return result;
  },
  stringRawImplementation: function (str, ...values) {
    let result = str.raw[0];
    values.forEach((val, i) => {
      result = result + val;
      result = result + str.raw[i + 1];
    });
    return result;
  },
  textLocalization: function (str, ...values) {
    let result = "";
    if (values[1]) {
      result = "Guten Morgan" + " " + values[0];
    } else {
      result = str[0] + values[0];
    }
    return result;
  },
};
module.exports = obj;
