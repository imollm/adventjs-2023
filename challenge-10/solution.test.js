import { describe, test } from "node:test";
import assert from "node:assert";
import createChristmasTree from "./solution.js";

describe("Challange-09 tests", () => {
  test("Test: return type", () => {
    const expected = "string";
    const actual = typeof createChristmasTree("x", 3);
    assert.strictEqual(actual, expected);
  });

  test('Test: createChristmasTree("x", 3)', () => {
    const expected = `  x
 x x
x x x
  |
`;
    const actual = createChristmasTree("x", 3);
    assert.strictEqual(actual, expected);
  });

  test('Test: createChristmasTree("xo", 4)', () => {
    const expected = `   x
  o x
 o x o
x o x o
   |
`;
    const actual = createChristmasTree("xo", 4);
    assert.strictEqual(actual, expected);
  });

  test('Test: createChristmasTree("123", 5)', () => {
    const expected = `    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`;
    const actual = createChristmasTree("123", 5);
    assert.strictEqual(actual, expected);
  });

  test('Test: createChristmasTree("*@o", 3)', () => {
    const expected = `  *
 @ o
* @ o
  |
`;
    const actual = createChristmasTree("*@o", 3);
    assert.strictEqual(actual, expected);
  });
});
