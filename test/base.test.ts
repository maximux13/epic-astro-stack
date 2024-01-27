import { expect, test } from "vitest";

test("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test("JSON", () => {
  const input = {
    bar: "world",
    foo: "hello",
  };

  const output = JSON.stringify(input);

  expect(output).toEqual('{"bar":"world","foo":"hello"}');
});
