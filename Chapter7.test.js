const obj = require("./Chapter7");

describe("Symbols in javascript", () => {
  test("Symbole primitive Values", () => {
    expect(obj.symbol("Hello World").toString()).toBe(
      Symbol("Hello World").toString()
    );
  });
  test("Symbols in Objects", () => {
    var a = { name: "Akshay", id: 123 };
    var b = { name: "Akshay", id: 123 };
    var idSym = Symbol("id");
    b[idSym] = 1222;
    expect(obj.symbolInObjects(a).toString()).toEqual(b.toString());
  });
  test("Symbols are visible in object keys and also in for in loop", () => {
    var b = { name: "Akshay", id: 123 };
    var idSym = Symbol("id");
    b[idSym] = 1222;
    expect(obj.symbolVisibility(b)).toStrictEqual(["name", "id"]);
  });
  test("Wrapper objects for Symbols", () => {
    expect(obj.wrapperObjects("Hello").toString()).toBe(
      Object(Symbol("Hello")).toString()
    );
  });
});
