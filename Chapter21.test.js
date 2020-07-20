const obj = require("./Chapter21");

describe("Iterables and iterators in ES6 Javascript", () => {
  test("Symbol.iterator example", () => {
    var arr = [1, 2];
    expect(obj.symbolIteratorExample(arr)).toStrictEqual({
      value: 1,
      done: false,
    });
  });
  test("Symbol.iterator iterator next method", () => {
    var arr = [1, 2];
    expect(obj.nextMethod(arr)).toStrictEqual(arr);
  });
  describe("Iterable data source like Array,string,set, etc.,", () => {
    test("String data source", () => {
      expect(obj.iterableDataSource("Akshay")).toBe(6);
    });
    test("Array data source", () => {
      expect(obj.iterableDataSource([1, 2, 3])).toBe(3);
    });
  });
  describe("Iterble language constructs like for-of, destructuring, spread operator, etc.", () => {
    test("for-of loop", () => {
      expect(obj.iterableDataSource("Hello")).toBe(5);
    });
    test("Destructuring Array", () => {
      expect(obj.iterableLanguageConstructs([1, 2, 3, 4])).toStrictEqual([
        1,
        2,
        3,
      ]);
    });
  });
  test("Implementing iterables", () => {
    expect(obj.implementingIteratables([])).toStrictEqual(["Hello", "world"]);
  });
  test("Iterables for object properities", () => {
    const o = { name: "Akshay", age: 21 };
    var arr = [];
    for (const [key, value] of obj.iteratableObject(o)) {
      arr.push([key, value]);
    }
    expect(arr).toStrictEqual([
      ["name", "Akshay"],
      ["age", 21],
    ]);
  });
  test("Closing Iterators", () => {
    expect(obj.closingIterables([1, 2, 3])).toBe(1);
  });
});
