const obj = {
  startsWith: function (str, str2) {
    return str.startsWith(str2);
  },
  startWithIndex: function (str, str2, index) {
    return str.startsWith(str2, index);
  },
  include: function (str, str2) {
    return str.includes(str2);
  },
  unicodePointEscape: function (str) {
    var a = str.codePointAt(0);
    return [String.fromCodePoint(a), "\u{1F680}"];
  },
  templateLiterals: function (name) {
    return `Hello, ${name}`;
  },
  iteratingOverStrings: function (str) {
    var result = [];
    for (const k of str) {
      result.push(k);
    }
    return result;
  },
  reverseStringsWithSpread: function (str) {
    var a = [...str].reverse().join("");
    return a;
  },
  repeatingStrings: function (str, n) {
    return str.repeat(n);
  },
};

module.exports = obj;
