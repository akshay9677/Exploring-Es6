const obj = require("./Chapter13");

describe("Arrow functions in ES6", () => {
  test("Arrow function syntax", () => {
    var a = "Hello World";
    expect(obj.arrowFunction(a)).toBe(a);
  });
  test("If Arrow function is used, this keyword is not shadowed in nested functions", () => {
    expect(obj.thisisNotShadowed.method()).toBe("Akshay");
  });
  test("Immediately Invoked Arrow Functions", () => {
    expect(obj.IIAF("Hello World")).toBe("Hello World");
  });
  test("Arrow function bind loosley it loses conflict with other operators", () => {
    expect(obj.arrowFunctionLooselyBound(22)).toBe(22);
  });
  test("Returning Object literals", () => {
    expect(obj.returnObjects("Akshay")).toStrictEqual({ name: "Akshay" });
  });
});
