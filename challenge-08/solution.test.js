import { describe, test } from "node:test";
import assert from "node:assert";
import organizeGifts from "./solution.js";

describe("Challange-07 tests", () => {
  test("Test: organizeGifts('76a11b')", () => {
    const expected = "[a]{a}{a}(aaaaaa){b}(b)";
    const actual = organizeGifts("76a11b");
    assert.strictEqual(actual, expected);
  });

  test("Test: organizeGifts('20a')", () => {
    const expected = "{a}{a}";
    const actual = organizeGifts("20a");
    assert.strictEqual(actual, expected);
  });

  test("Test: organizeGifts('70b120a4c')", () => {
    const expected = "[b]{b}{b}[a][a]{a}{a}(cccc)";
    const actual = organizeGifts("70b120a4c");
    assert.strictEqual(actual, expected);
  });

  test("Test: organizeGifts('9c')", () => {
    const expected = "(ccccccccc)";
    const actual = organizeGifts("9c");
    assert.strictEqual(actual, expected);
  });

  test("Test: organizeGifts('19d51e')", () => {
    const expected = "{d}(ddddddddd)[e](e)";
    const actual = organizeGifts("19d51e");
    assert.strictEqual(actual, expected);
  });
});
