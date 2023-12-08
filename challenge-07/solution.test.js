import { describe, test } from "node:test";
import assert from "node:assert";
import drawGift from "./solution.js";

describe("Challange-07 tests", () => {
  test("Test: return type", () => {
    const result = drawGift(4, "+");
    assert.strictEqual(typeof result, "string");
  });

  test("", () => {
    const expected = `
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####`;
    const actual = drawGift(4, "+");
    assert.strictEqual(actual, expected);
  });

  test("", () => {
    const expected = `
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####`;
    const actual = drawGift(5, "*");
    assert.strictEqual(actual, expected);
  });

  // test("", () => {
  //   const expected = 5;
  //   const actual = drawGift(">***>");
  //   assert.strictEqual(actual, expected);
  // });

  // test("", () => {
  //   const expected = 10;
  //   const actual = drawGift("**********");
  //   assert.strictEqual(actual, expected);
  // });

  // test("", () => {
  //   const expected = 2;
  //   const actual = drawGift("<<**>>");
  //   assert.strictEqual(actual, expected);
  // });
});
