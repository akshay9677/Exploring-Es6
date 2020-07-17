const obj = require("./Chapter6");

describe("New String Features in ES6", () => {
  test("Starts with method", () => {
    expect(obj.startsWith("Akshay", "A")).toBeTruthy();
  });
  test("Starts with method along with index", () => {
    expect(obj.startWithIndex("Akshay", "ksh", 1)).toBeTruthy();
  });
  test("Includes method in string", () => {
    expect(obj.include("Akshay", "hay")).toBeTruthy();
  });
  test("Unicode Point Escape ", () => {
    expect(obj.unicodePointEscape("🚀")).toStrictEqual(["🚀", "🚀"]);
  });
  test("Iterating over strings for-of loop", () => {
    expect(obj.iteratingOverStrings("Akshay")).toStrictEqual([
      "A",
      "k",
      "s",
      "h",
      "a",
      "y",
    ]);
  });
  test("Reverse string using the spread operator", () => {
    expect(obj.reverseStringsWithSpread("Akshay")).toBe("yahskA");
  });
  test("Repeat string method", () => {
    expect(obj.repeatingStrings("Akshay", 2)).toBe("AkshayAkshay");
  });
});
