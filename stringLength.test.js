const stringLength = require("./stringLength.js");

describe("stringLength", () => {
  test("returns the correct length for a given string", () => {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("1234567890")).toBe(10);
    expect(() => {stringLength("")}).toThrow("at least 1");
    expect(() => {stringLength("12345678901")}).toThrow("not longer than 10");
  });
});
