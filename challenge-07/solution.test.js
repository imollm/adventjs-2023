import { describe, test } from "node:test";
import assert from "node:assert";
import drawGift from "./solution.js";

describe("Challange-07 tests", () => {
  test("Test: return type", () => {
    const result = drawGift(4, "+");
    assert.strictEqual(typeof result, "string");
  });

  test("Test: drawGift(4, '+')", () => {
    const expected = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`;
    const actual = drawGift(4, "+");
    assert.strictEqual(actual, expected);
  });

  test("Test: drawGift(5, '*')", () => {
    const expected = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`;
    const actual = drawGift(5, "*");
    assert.strictEqual(actual, expected);
  });

  test("Test: drawGift(1, '^')", () => {
    const expected = `#
`;
    const actual = drawGift(1, "^");
    assert.strictEqual(actual, expected);
  });

  test("Test: drawGift(2, '&')", () => {
    const expected = ` ##
###
##
`;
    const actual = drawGift(2, "&");
    assert.strictEqual(actual, expected);
  });

  test("", () => {
    const expected = `         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
`;
    const actual = drawGift(10, "%");
    assert.strictEqual(actual, expected);
  });
});
