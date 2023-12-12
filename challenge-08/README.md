# Challenge 8: 🏬 Sorting the warehouse

<img src="https://adventjs.dev/challenges-2023/8.png" alt="challange-08" width="40px" height="40px" />

## Instructions

<p>Santa is experimenting with new gift designs and <strong style="color:rgb(250 202 21)">he needs your help to visualize them in 3D</strong>.</p>
<p>Your task is to write a function that, given a size n (integer), <strong style="color:rgb(250 202 21)">generates a drawing of a 3D gift</strong> using ASCII characters.</p>
<p>The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:</p>

<p>The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.</p>
<p>The input format is special, as it indicates the number of gifts and the type of gift with letters from <code>a</code> to <code>z</code>. For example, <code>'66a11b'</code> means 66 <code>a</code> gifts and 11 <code>b</code> gifts.</p>
<p>The elves have a <strong>special system</strong> for organizing the gifts:</p>
<ul>
<li>Every 10 gifts of the same type are packed in a box, represented by <code>{x}</code>. For example, 20 type a gifts are packed in two boxes like this: <code>{a}{a}</code>.</li>
<li>Every 5 boxes are stacked on a pallet, represented by <code>[x]</code>. For example, 10 <code>a</code> boxes are stacked on 2 pallets in this way: <code>[a][a]</code></li>
<li>Any additional gift is placed in a bag, represented by <code>()</code> and all of them are placed inside. For example, 4 <code>b</code> gifts are placed in a bag like this <code>(bbbb)</code></li>
</ul>
<p><strong>The gifts are then placed in the following order</strong>: <em>pallets, boxes and bags</em>. And the gifts appear in the same order as the input string.</p>
<p>Your task is to write a function <code>organizeGifts</code> that takes a string of gifts as an argument and returns a string representing the warehouse.</p>

```js
const result1 = organizeGifts('76a11b')
console.log(result1) // `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

```

# Solution
### Completed with 140 points
```js
function organizeGifts(gifts) {
  const pallet = 50; // 5 boxes * 10 gifts
  const box = 10; // 10 gifts
  let totalGifts = 0;

  const giveMeSeparatedGifts = (gifts) => {
    return Array.from(gifts.matchAll(/\d+[a-z]/g)).map((g) => g[0] || []);
  };
  const giveMeThePallets = (gift) => {
    const numOfPallets = Math.floor(totalGifts / pallet);
    totalGifts = totalGifts - numOfPallets * pallet;
    return numOfPallets > 0 ? `[${gift}]`.repeat(numOfPallets) : "";
  };
  const giveMeTheBoxes = (gift) => {
    const numOfBoxes = Math.floor(totalGifts / box);
    totalGifts = totalGifts - numOfBoxes * box;
    return numOfBoxes > 0 ? `{${gift}}`.repeat(numOfBoxes) : "";
  };
  const giveMeTheBag = (gift) => {
    return totalGifts > 0 ? `(${gift.repeat(totalGifts)})` : "";
  };

  return giveMeSeparatedGifts(gifts)
    .map((gift) => {
      totalGifts = parseInt(gift);
      const giftChar = gift.replace(/\d/g, "");

      return (
        giveMeThePallets(giftChar) +
        giveMeTheBoxes(giftChar) +
        giveMeTheBag(giftChar)
      );
    })
    .join("");
}
```