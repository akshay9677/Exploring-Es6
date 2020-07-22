const obj = require("./Chapter25");

describe("Promises in ES6", () => {
  test("Creating promises syntax", () => {
    return obj.promiseExample("Akshay").then((a) => {
      expect(a).toBe("Hello, Akshay");
    });
  });
  test("Chaining then in promises", () => {
    return obj
      .promiseExample("Akshay")
      .then((a) => a + "!")
      .then((val) => {
        expect(val).toEqual("Hello, Akshay!");
      });
  });
  test("Executing async codes in parallel", () => {
    return Promise.all([obj.promiseAll, obj.promiseAll2])
      .then((val) => {
        return val;
      })
      .then((v) => {
        expect(v).toStrictEqual([22, 23]);
      });
  });
  test("Handling reject in promises", () => {
    return obj
      .promiseExample2("Akshay")
      .then((a) => {
        expect(a).toBe("Hello, Akshay");
      })
      .catch((e) => {
        expect(e).toBe("Error Occured");
      });
  });
  test("Promise Race in promises", () => {
    return Promise.race([obj.promiseRace2, obj.promiseRace1]).then((val) => {
      expect(val).toBe(42);
    });
  });
});
