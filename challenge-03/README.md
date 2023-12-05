# Challenge 3: 😏 The naughty elf

<img src="https://adventjs.dev/challenges-2023/3.png" alt="challange-03" width="40px" height="40px" />

## Instructions

<p>In Santa's workshop, <strong style="color:rgb(250 202 21)">a mischievous elf</strong> has been playing around with the gift production line, adding or removing an unplanned step.</p>
<p>In Santa's workshop, <strong style="color:rgb(250 202 21)">a mischievous elf</strong> has been playing around with the gift production line, adding or removing an unplanned step.</p>
<p>Your task is to <strong style="color:rgb(250 202 21)">write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain</strong>. If there is no difference between the sequences, return an empty string.</p>

```js
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```

<p>Please, keep in mind:</p>

<ul style="color:rgb(250 202 21)">
<li>There will always be one different step or none.</li>
<li>The modification can occur anywhere in the string.</li>
<li>The <em>original</em> steps could be empty</li>
</ul>

# Solution
### Completed with 320 points
```js
function findNaughtyStep(original, modified) {
  const findDifferentElement = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i];
      }
    }
    return arr1[arr1.length - 1];
  }

  let differentElement = "";
  if (original.length < modified.length) {
    differentElement = findDifferentElement(modified, original);
  } else if (original.length > modified.length) {
    differentElement = findDifferentElement(original, modified);
  }
  return differentElement;
}
```