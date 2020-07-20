const obj = {
  arrowFunction: (x) => x,
  thisisNotShadowed: {
    name: "Akshay",
    method: function () {
      var x = () => this.name;
      return x();
    },
  },
  IIAF: function (x) {
    (() => {
      a = x;
    })();
    return a;
  },
  arrowFunctionLooselyBound: function (a) {
    const f = (x) => (x % 2 === 0 ? x : 0);
    return f(a);
  },
  returnObjects: (x) => ({ name: x }),
};

module.exports = obj;
