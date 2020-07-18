const obj = require("./Chapter10");

describe("Destructuring ES6 feature", () => {
  test("object destructuring", () => {
    const a = { name: "Akshay", age: 21 };
    expect(obj.objectDestructuring(a)).toBe(21);
  });
  test("Array Destructuring", () => {
    const arr = [22, 43];
    expect(obj.arrayDestructuring(arr)).toBe(43);
  });
  describe("Default value", () => {
    test("Default Values if one value is missing in the array", () => {
      var arr = [1, 2];
      expect(obj.defaultValue(arr)).toStrictEqual([1, 2, 0]);
    });
    test("Default Values if all the values are missing in the array", () => {
      var arr = [];
      expect(obj.defaultValue(arr)).toStrictEqual([0, 0, 0]);
    });
  });
  describe("Object destructuring features", () => {
    test("Short Hand for objects", () => {
      var o = { name: "Akshay", age: 21 };
      expect(obj.shortHand(o)).toBe("Akshay");
    });
    test("Computed Keys in object", () => {
      var o = { id: 123 };
      var ID = "id";
      expect(obj.computedKeys(o, ID)).toBe(123);
    });
  });
  describe("Array destructuring Features", () => {
    test("Extracting values in between values - Elision", () => {
      var arr = [1, 4, 3, 5];
      expect(obj.elision(arr)).toBe(3);
    });
    test("Rest Parameter by using the spread operator", () => {
      var arr = [1, 5, 3, 6, 7, 33];
      expect(obj.restParameter(arr)).toStrictEqual([5, 3, 6, 7, 33]);
    });
  });
  test("Destructuring can be used to assign values to properties of objects", () => {
    var a = { name: "Akshay" };
    var o = {};
    expect(obj.destructuringForObjectProps(a, o)).toStrictEqual({
      name: "Akshay",
    });
  });
  test("Use Case can be used in return values in functions", () => {
    var [, b] = obj.useCaseReturnValue(1, 2);
    expect(b).toBe(2);
  });
});
