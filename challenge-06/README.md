# Challenge 6: 🦌 The reindeer n trial

<img src="https://adventjs.dev/challenges-2023/6.png" alt="challange-04" width="40px" height="40px" />

## Instructions

<p>The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.</p>
<p>For this, they have a text string <code>movements</code> where each character represents the direction of the reindeer's movement:</p>
<ul>
<li><code>&gt;</code> = Moves to the right</li>
<li><code>&lt;</code> = Moves to the left</li>
<li><code>*</code> = Can move forward or backward</li>
</ul>
<p>For example, if the movement is <code>&gt;&gt;*&lt;</code>, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.</p>
<p>The elves want to know what the maximum distance the reindeer travels is <strong style="color:rgb(250 202 21)">after completing all movements.</strong></p>
<p><strong style="color:rgb(250 202 21)">In the previous example, the maximum distance the reindeer travels is <code>2</code></strong>. It goes to the right twice <code>+2</code>, then with the <code>*</code> it can go to the right again to maximize the distance <code>+1</code> and then it goes to the left <code>-1</code>.</p>
<p>Create a <code>maxDistance</code> function that takes the text string <code>movements</code> and returns <strong style="color:rgb(250 202 21)">the maximum distance</strong> that the reindeer can travel <strong style="color:rgb(250 202 21)">in any direction</strong>:</p>

```js
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
```

<p>Keep in mind that it doesn't matter whether it is to the left or right, the distance is <strong style="color:rgb(250 202 21)">the absolute value of the maximum distance traveled at the end of the movements</strong>.</p>

# Solution
### Completed with 350 points
```js
function maxDistance(movements) {
  let result = 0;
  const moveAsArray = Array.from(movements);
  const left = moveAsArray.at(0) === "<" ? 1 : -1;
  const right = left * -1;
  const forwardOrBackward = 1;

  for (const move of moveAsArray) {
    if (move === "<") {
      result += left;
    } else if (move === ">") {
      result += right;
    } else if (move === "*") {
      result += forwardOrBackward;
    }
  }

  return result;
}
```