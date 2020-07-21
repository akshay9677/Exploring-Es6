const obj = require("./App");

describe("Iterating over the properties of Object by using iterators and generators", () => {
  var a = { name: "Akshay", age: 2, id: 121, favColor: "Red" };
  test("Using Iterators", () => {
    var arr = [];
    for (const [key, value] of obj.objPropIterator(a)) {
      arr.push(key);
    }
    expect(arr).toStrictEqual(["name", "age", "id", "favColor"]);
  });
  describe("Using Genrators", () => {
    test("Iterating using generators without limit", () => {
      var arr = [];
      for (const k of obj.objPropIteratorGen(a)) {
        arr.push(k);
      }
      expect(arr).toStrictEqual(["name", "age", "id", "favColor"]);
    });
    test("Iterating using generators with limit", () => {
      var arr = [];
      for (const k of obj.objPropIteratorGenWithLimit(a, 2)) {
        arr.push(k);
      }
      expect(arr).toStrictEqual(["name", "age"]);
    });
  });
});
