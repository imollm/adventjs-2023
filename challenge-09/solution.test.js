import { describe, test } from "node:test";
import assert from "node:assert";
import adjustLights from "./solution.js";

describe("Challange-09 tests", () => {
  test("Test: return type", () => {
    const expected = "number";
    const actual = typeof adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
    assert.strictEqual(actual, expected);
  });

  test('Test: adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])', () => {
    const expected = 1;
    const actual = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
    assert.strictEqual(actual, expected);
  });

  test('Test: adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])', () => {
    const expected = 2;
    const actual = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
    assert.strictEqual(actual, expected);
  });

  test('Test: adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])', () => {
    const expected = 1;
    const actual = adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]);
    assert.strictEqual(actual, expected);
  });

  test('Test: adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])', () => {
    const expected = 0;
    const actual = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
    assert.strictEqual(actual, expected);
  });

  test('Test: adjustLights(["🔴", "🔴", "🔴"])', () => {
    const expected = 1;
    const actual = adjustLights(["🔴", "🔴", "🔴"]);
    assert.strictEqual(actual, expected);
  });
});
