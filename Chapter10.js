const obj = {
  objectDestructuring: function (a) {
    const { age } = a;
    return age;
  },
  arrayDestructuring: function (arr) {
    const [a, b] = arr;
    return b;
  },
  defaultValue: function (arr) {
    var [x = 0, y = 0, z = 0] = arr;
    return [x, y, z];
  },
  shortHand: function (o) {
    var { name } = o;
    return name;
  },
  computedKeys: function (a, n) {
    const { [n]: value } = a;
    return value;
  },
  elision: function (arr) {
    var [, , a] = arr;
    return a;
  },
  restParameter: function (arr) {
    var [a, ...b] = arr;
    return b;
  },
  destructuringForObjectProps: function (a, o) {
    ({ name: o.name } = a);
    return o;
  },
  useCaseReturnValue: function (x, y) {
    return [x, y];
  },
};

module.exports = obj;
