import { describe, test } from "node:test";
import assert from "node:assert";
import getIndexsForPalindrome from "./solution.js";

describe("Challange-11 tests", () => {
  test("Test: return type", () => {
    const expected = "function";
    const actual = typeof getIndexsForPalindrome("");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("anna")', () => {
    const expected = [];
    const actual = getIndexsForPalindrome("anna");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("abab")', () => {
    const expected = [0, 1];
    const actual = getIndexsForPalindrome("abab");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("abac")', () => {
    const expected = null;
    const actual = getIndexsForPalindrome("abac");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("aaaaaaaa")', () => {
    const expected = [];
    const actual = getIndexsForPalindrome("aaaaaaaa");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("aaababa")', () => {
    const expected = [2, 5];
    const actual = getIndexsForPalindrome("aaababa");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("caababa")', () => {
    const expected = [0, 5];
    const actual = getIndexsForPalindrome("caababa");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("rotavator")', () => {
    const expected = [0, 8];
    const actual = getIndexsForPalindrome("rotavator");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("rotaratov")', () => {
    const expected = [0, 8];
    const actual = getIndexsForPalindrome("rotaratov");
    assert.equal(actual, expected);
  });

  test('Test: getIndexsForPalindrome("saippuakivikauppias")', () => {
    const expected = [0, 18];
    const actual = getIndexsForPalindrome("saippuakivikauppias");
    assert.equal(actual, expected);
  });
});
