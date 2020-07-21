const obj = require("./Chapter22");

describe("Generators in javascript", () => {
  test("Generators example syntax", () => {
    var arr = [];
    const itr = obj.genExample();
    arr.push(itr.next().value);
    arr.push(itr.next().value);
    arr.push(itr.next().value);
    expect(arr).toStrictEqual(["a", "b", "c"]);
  });
  describe("Roles Of Generators - Iterators (data producers)", () => {
    test("In for of loop", () => {
      var arr = [];
      for (const k of obj.genExample()) {
        arr.push(k);
      }
      expect(arr).toStrictEqual(["a", "b", "c"]);
    });
    test("In destructuring", () => {
      var [a, b, c] = obj.genExample();
      expect([a, b, c]).toStrictEqual(["a", "b", "c"]);
    });
    test("In recursions", () => {
      var arr = [];
      for (const i of obj.genRecursion()) {
        arr.push(i);
      }
      expect(arr).toStrictEqual(["a", "b", "c", "d", "e"]);
    });
  });
  describe("Roles of generators - Data Observers ", () => {
    test("Sending values to yield in generators - next", () => {
      const itr = obj.genSendValues();
      itr.next();
      expect(itr.next(23).value).toBe(23);
    });
  });
  describe("Roles of generators - Cooperative multi tasking", () => {
    test("Fetch data by using generators", () => {
      const itr = obj.genCoroutines();
      let a = itr.next();
      a.value.then((value) => {
        expect(value).toBe("Hello World");
      });
    });
  });
});
