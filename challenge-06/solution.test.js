import { describe, test } from "node:test";
import assert from "node:assert";
import maxDistance from "./solution.js";

describe("Challange-06 tests", () => {
  test("Test: return type", () => {
    const result = maxDistance("<<<");
    assert.strictEqual(Number.isInteger(result), true);
  });

  test("Test: maxDistance('>>*<')", () => {
    const expected = 2;
    const actual = maxDistance(">>*<");
    assert.strictEqual(actual, expected);
  });

  test("Test: maxDistance('<<<<<')", () => {
    const expected = 5;
    const actual = maxDistance("<<<<<");
    assert.strictEqual(actual, expected);
  });

  test("Test: maxDistance('>***>')", () => {
    const expected = 5;
    const actual = maxDistance(">***>");
    assert.strictEqual(actual, expected);
  });

  test("Test: maxDistance('**********')", () => {
    const expected = 10;
    const actual = maxDistance("**********");
    assert.strictEqual(actual, expected);
  });

  test("Test: maxDistance('<<**>>')", () => {
    const expected = 2;
    const actual = maxDistance("<<**>>");
    assert.strictEqual(actual, expected);
  });
});
