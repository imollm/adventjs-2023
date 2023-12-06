import { describe, test } from "node:test";
import assert from "node:assert";
import cyberReindeer from "./solution.js";

describe("Challange-05 tests", () => {
  test("Test: return type", () => {
    const result = cyberReindeer("S.|.|.", 7);
    assert.strictEqual(Array.isArray(result), true);
  });

  test("Test: cyberReindeer('S..|...|..', 10)", () => {
    const expected = [
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S..",
    ];
    const actual = cyberReindeer("S..|...|..", 10);
    assert.deepEqual(actual, expected);
  });

  test("Test: cyberReindeer('S.|.', 4)", () => {
    const expected = ["S.|.", ".S|.", ".S|.", ".S|."];
    const actual = cyberReindeer("S.|.", 4);
    assert.deepEqual(actual, expected);
  });

  test("Test: cyberReindeer('S.|.|.', 7)", () => {
    const expected = [
      "S.|.|.",
      ".S|.|.",
      ".S|.|.",
      ".S|.|.",
      ".S|.|.",
      "..S.*.",
      "..*S*.",
    ];
    const actual = cyberReindeer("S.|.|.", 7);
    assert.deepEqual(actual, expected);
  });

  test("Test: cyberReindeer('S.|..', 6)", () => {
    const expected = ["S.|..", ".S|..", ".S|..", ".S|..", ".S|..", "..S.."];
    const actual = cyberReindeer("S.|..", 6);
    assert.deepEqual(actual, expected);
  });

  test("Test: cyberReindeer('S.|.|.|......|.||.........', 8)", () => {
    const expected = [
      "S.|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      "..S.*.*......*.**.........",
      "..*S*.*......*.**.........",
      "..*.S.*......*.**.........",
    ];
    const actual = cyberReindeer("S.|.|.|......|.||.........", 8);
    assert.deepEqual(actual, expected);
  });
});
