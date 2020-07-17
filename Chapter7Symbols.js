const obj = {
  symbol: function (n) {
    var s = Symbol(n);
    return s.toString();
  },
  symbolInObjects: function (a) {
    var idSym = Symbol("id");
    a[idSym] = 1222;
    return a;
  },
  symbolVisibility: function (a) {
    console.log(Object.keys(a));
  },
  wrapperObjects: function () {
    var a = Symbol("hello");
    var b = Object(a);
    console.log(b);
  },
};
console.log(obj.symbol("Hello World"));
var a = { name: "Akshay", id: 123 };
console.log(obj.symbolInObjects(a));
var a = { name: "Akshay", id: 123 };
obj.symbolVisibility(a);

module.exports = obj;
