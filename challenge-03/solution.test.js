import { describe, test } from "node:test";
import assert from "node:assert";
import findNaughtyStep from "./solution.js";

describe("Challange-03 tests", () => {
  test("Test: return type", () => {
    const result = findNaughtyStep("abcd", "abcde");
    assert.strictEqual(typeof result, "string");
  });

  test("Test: findNaughtyStep(!abcd!, !abcde!)", () => {
    const result = findNaughtyStep("abcd", "abcde");
    assert.deepStrictEqual(result, "e");
  });

  test('Test: Test: findNaughtyStep("xxxx", "xxoxx")', () => {
    const result = findNaughtyStep("xxxx", "xxoxx");
    assert.deepStrictEqual(result, "o");
  });

  test('Test: Test: findNaughtyStep("stepfor", "stepor")', () => {
    const result = findNaughtyStep("stepfor", "stepor");
    assert.deepStrictEqual(result, "f");
  });

  test('Test: Test: findNaughtyStep("iiiii", "stepiiiiior")', () => {
    const result = findNaughtyStep("iiiii", "iiiii");
    assert.deepStrictEqual(result, "");
  });
});
