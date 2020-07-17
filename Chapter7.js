const obj = {
  symbol: function (n) {
    var s = Symbol(n);
    return s;
  },
  symbolInObjects: function (a) {
    var idSym = Symbol("id");
    a[idSym] = 1222;
    return a;
  },
  symbolVisibility: function (a) {
    return Object.keys(a);
  },
  wrapperObjects: function (n) {
    var a = Symbol(n);
    var b = Object(a);
    return b;
  },
};
module.exports = obj;
