const obj = require("./Chapter11");

describe("Parameter Handling ES6", () => {
  test("Default values", () => {
    expect(obj.defaultParameterValues(1)).toStrictEqual([1, 0]);
  });
  test("Rest Parameter by using spread operator", () => {
    expect(obj.restParameter(1, 4, 3, 2, 4)).toStrictEqual([4, 3, 2, 4]);
  });
  test("Named Parameter using destructuring", () => {
    expect(obj.namedParameter({ a: 2 })).toStrictEqual([2, 0, 0]);
  });
  test("Referring other parameters in default values", () => {
    expect(obj.expectOtherParameter(2)).toStrictEqual([2, 2]);
  });
  test("Combining destructuring and rest parameter", () => {
    expect(obj.restAndDestructure(1, 32, 43, 567)).toStrictEqual([1, 32]);
  });
  test("Ensuring minimum arity", () => {
    expect(obj.minimumArity(22)).toBe("Error Parameters are missing");
  });
});
