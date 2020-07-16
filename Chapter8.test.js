const obj = require("./Chapter8");

describe("Template Literals", () => {
  test("Template Literals", () => {
    expect(obj.templateLiterals("Akshay")).toBe("Hello Akshay");
  });
  test("Tagged Literals", () => {
    var name = "Akshay";
    expect(obj.taggedLiterals`Hello ${name} ,How are you?`).toBe(
      "Hello Akshay ,How are you?"
    );
  });
  describe("Examples for tagged template literals", () => {
    test("String raw implementation using Tagged Literals", () => {
      expect(obj.stringRawImplementation`Hello Sir\Mam!!`).toBe(
        String.raw`Hello Sir\Mam!!`
      );
    });
    test("Text Localization using Tagged literals German and English", () => {
      var name = "Akshay";
      var localization = true;
      expect(obj.textLocalization`Hello ${name} ${localization}`).toBe(
        "Guten Morgan Akshay"
      );
      localization = false;
      expect(obj.textLocalization`Hello ${name} ${localization}`).toBe(
        "Hello Akshay"
      );
    });
  });
});
