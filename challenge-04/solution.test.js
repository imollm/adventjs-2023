import { describe, test } from "node:test";
import assert from "node:assert";
import decode from "./solution.js";

describe("Challange-04 tests", () => {
  test("Test: return type", () => {
    const result = decode("hello(world)");
    assert.strictEqual(typeof result, "string");
  });

  test("Test: decode('hola (odnum)')", () => {
    const result = decode("hola (odnum)");
    assert.strictEqual(result, "hola mundo");
  });

  test('Test: decode("(olleh) (dlrow)!")', () => {
    const result = decode("(olleh) (dlrow)!");
    assert.strictEqual(result, "hello world!");
  });

  test('Test: decode("sa(u(cla)atn)s")', () => {
    const result = decode("sa(u(cla)atn)s");
    assert.strictEqual(result, "santaclaus");
  });

  test('Test: decode("((nta)(sa))")', () => {
    const result = decode("((nta)(sa))");
    assert.strictEqual(result, "santa");
  });
});
