const obj = require("./Chapter9");

describe("let, const and scoping", () => {
  test("Check for Let/Const is block scoped - accesing outside scope", () => {
    expect(obj.letBlockedScopeCheck()).toBe("ReferenceError");
  });
  test("const can be used in loops", () => {
    var arr = [1, 2, 3];
    expect(obj.constInLoops(arr)).toStrictEqual([1, 2, 3]);
  });
  test("Temporal dead zone example - using let or const before initializing", () => {
    expect(obj.temporalDeadZone()).toBe("ReferenceError");
  });
  test("var in loop heads", () => {
    var arr = [];
    var n = 3;
    expect(obj.varInLoops(arr, n)).toStrictEqual([3, 3, 3]);
  });
  test("let or const in loop heads", () => {
    var arr = [];
    var n = 3;
    expect(obj.letInLoops(arr, n)).toStrictEqual([0, 1, 2]);
  });
});
