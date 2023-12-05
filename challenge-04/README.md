# Challenge 4: 😵‍💫 Turn the parentheses around

<img src="https://adventjs.dev/challenges-2023/4.png" alt="challange-04" width="40px" height="40px" />

## Instructions

<p>In 🎅 Santa's workshop, <strong style="color:rgb(250 202 21)">some Christmas messages have been written in a peculiar way</strong>: the words within the brackets must be read backwards.</p>
<p><strong style="color:rgb(250 202 21)">Santa needs these messages to be correctly formatted.</strong> Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.</p>
<p>However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.</p>

```js
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus
```

<p>Notes:</p>

<ul style="color:rgb(250 202 21)">
<li>The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.</li>
<li>There should not be any parentheses left in the final message.</li>
<li>The maximum nesting level is 2.</li>
</ul>

# Solution
### Completed with 260 points
```js
function decode(message) {
  const stack = [];
  let currentWord = '';

  for (const char of message) {
    if (char === '(') {
      stack.push(currentWord);
      currentWord = '';
    } else if (char === ')') {
      currentWord = stack.pop() + currentWord.split('').reverse().join('');
    } else {
      currentWord += char;
    }
  }

  return stack.length > 0 ? stack.pop() + currentWord : currentWord;
}
```