# Challenge 11: 📖 The studious elves

<img src="https://adventjs.dev/challenges-2023/11.png" alt="challange-11" width="40px" height="40px" />

## Instructions

<style>
  strong, ul {
    --tw-text-opacity: 1;
    color: rgb(250 202 21/var(--tw-text-opacity));
  }
</style>

<p>In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.</p>
<p><strong>A palindrome is a word that reads the same forwards and backwards.</strong> The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.</p>
<p>Create a function <code>getIndexsForPalindrome</code> that receives a string and returns:</p>
<ul>
<li>If it is already a palindrome, an empty array.</li>
<li>If it is not possible, null.</li>
<li>If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.</li>
</ul>
<p>For example:</p>

```js
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```

<p>If the palindrome can be formed with different swaps, <strong>always return the first one found.</strong></p>

# Solution
### Completed with XXX points
```js
const a = () => ''
```