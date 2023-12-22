# Challenge 10:  🎄 Create your own Christmas tree

<img src="https://adventjs.dev/challenges-2023/10.png" alt="challange-10" width="40px" height="40px" />

## Instructions

<style>
  strong, ul {
    --tw-text-opacity: 1;
    color: rgb(250 202 21/var(--tw-text-opacity));
  }
</style>

<p>What an idea <em>Sam Elfman</em> has had! He wants to offer a service that creates a <strong>customized Christmas tree 🎄</strong> in a matter of seconds.</p>
<p>To create it, we are given a <strong>string to form the tree</strong> and a <strong>number that indicates its height</strong>.</p>
<p>Each character of the string represents an ornament of the tree, and we use them <strong>cyclically</strong> until we reach the indicated height. At <strong>least, they will always pass us one</strong>.</p>
<p>We must return a multiline <strong>string</strong> with the Christmas tree made with the ornaments, the indicated height <strong>plus a final line with the trunk formed by the character <code>|</code></strong> in the center and, finally, a newline <code>\n</code>.</p>
<p>For example, if we receive the string "123" and the number <code>4</code> as height, we would have to build this tree:</p>
<pre><code>   1
  2 3
 1 2 3
1 2 3 1
   |
</code></pre>
<p>If we receive the string <code>*@o</code> and the number <code>3</code>, the tree we should return is:</p>
<pre><code>  *
 @ o
* @ o
  |
</code></pre>

<p>Note:</p>
<ul>
<li>The tree should always be centered, for that reason add blank spaces to the left of each line.</li>
<li>Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.</li>
<li>The ornaments have a white space between them for separation.</li>
</ul>

# Solution
### Completed with 180 points
```js
function createChristmasTree(ornaments, height) {
  const sumOfTheNFirstIntegers = (height * (height + 1)) / 2;
  const ornamentsString = ornaments.repeat(sumOfTheNFirstIntegers);
  const ornamentsAsLine = ornamentsString
    .split("")
    .slice(0, sumOfTheNFirstIntegers);

  const space = " ";
  const newLine = "\n";
  let tree = "";
  let ornamentIndex = 0;

  for (let i = 0; i < height; i++) {
    tree += space.repeat(Math.floor(height - 1 - i));
    tree += ornamentsAsLine
      .slice(ornamentIndex, ornamentIndex + i + 1)
      .join(space);
    tree += newLine;
    ornamentIndex += i + 1;
  }

  return tree + space.repeat(Math.floor(height - 1 / 2)) + "|" + newLine;
}
```