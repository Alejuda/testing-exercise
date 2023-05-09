const Calculator = require("./calculator");

const calculator = new Calculator();

describe("add", () => {
  test("returns the sum of two positive numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(10, 5)).toBe(15);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("returns the sum of a positive and a negative number", () => {
    expect(calculator.add(2, -3)).toBe(-1);
    expect(calculator.add(-10, 5)).toBe(-5);
  });
});

describe("subtract", () => {
  test("returns the difference between two positive numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(10, 5)).toBe(5);
  });

  test("returns the difference between a positive and a negative number", () => {
    expect(calculator.subtract(2, -3)).toBe(5);
    expect(calculator.subtract(-10, 5)).toBe(-15);
  });
});

describe("multiply", () => {
  test("returns the product of two positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(10, 5)).toBe(50);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test("returns the product of a positive and a negative number", () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
    expect(calculator.multiply(-10, 5)).toBe(-50);
  });
});

describe("divide", () => {
  test("returns the quotient of two positive numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test("returns the quotient of a positive and a negative number", () => {
    expect(calculator.divide(6, -3)).toBe(-2);
    expect(calculator.divide(-10, 5)).toBe(-2);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => {calculator.divide(10, 0)}).toThrow("Cannot divide by zero");
  });
});
