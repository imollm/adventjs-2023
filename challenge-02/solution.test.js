import { describe, test } from "node:test";
import assert from "node:assert";
import manufacture from "./solution.js";

describe("Challange-02 tests", () => {
  test("Test: return type", () => {
    const result = manufacture(["doll", "ball"], "ldloba");
    assert.strictEqual(typeof result, "object");
  });

  test('Test: manufacture(["tren", "oso", "pelota"], "tronesa")', () => {
    const result = manufacture(["tren", "oso", "pelota"], "tronesa");
    assert.deepStrictEqual(result, ["tren", "oso"]);
  });

  test('Test: manufacture(["coche", "muñeca", "balon"], "ocmuñalb")', () => {
    const result = manufacture(["coche", "muñeca", "balon"], "ocmuñalb");
    assert.deepStrictEqual(result, []);
  });

  test('Test: manufacture(["patineta", "robot", "libro"], "nopor")', () => {
    const result = manufacture(["patineta", "robot", "libro"], "nopor");
    assert.deepStrictEqual(result, []);
  });

  test('Test: manufacture([], "letras")', () => {
    const result = manufacture([], "letras");
    assert.deepStrictEqual(result, []);
  });
});
