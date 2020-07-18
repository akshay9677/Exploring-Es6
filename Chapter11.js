const obj = {
  defaultParameterValues: function (x = 0, y = 0) {
    return [x, y];
  },
  restParameter: function (a, ...args) {
    return args;
  },
  namedParameter: function ({ a = 0, y = 0, z = 0 } = {}) {
    return [a, y, z];
  },
  expectOtherParameter: function (x = 2, y = x) {
    return [x, y];
  },
  restAndDestructure: function (...args) {
    const [a, b] = args;
    return [a, b];
  },
  minimumArity: function (...args) {
    if (args.length < 2) {
      return "Error Parameters are missing";
    } else {
      return args;
    }
  },
};

module.exports = obj;
