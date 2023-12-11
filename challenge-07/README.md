# Challenge 7: 📦 The 3D boxes

<img src="https://adventjs.dev/challenges-2023/7.png" alt="challange-07" width="40px" height="40px" />

## Instructions

<p>Santa is experimenting with new gift designs and <strong style="color:rgb(250 202 21)">he needs your help to visualize them in 3D</strong>.</p>
<p>Your task is to write a function that, given a size n (integer), <strong style="color:rgb(250 202 21)">generates a drawing of a 3D gift</strong> using ASCII characters.</p>
<p>The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:</p>

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

<p>Important: We have been told that <strong style="color:rgb(250 202 21)">there is always to leave a newline at the end of the drawing</strong>.</p>

# Solution
### Completed with 270 points
```js
function drawGift(size, symbol) {
  const totalHeight = (size - 1) * 2 + 1;
  const backFillHeight = totalHeight - 2;
  const backFill = size - 2;
  const middle = Math.ceil(backFillHeight / 2);
  let dynamicBackFill = 0;
  let upperSpace = backFill;

  const PAD = "#";
  const SPACE = " ";
  const SYMBOL = symbol;
  const NEWLINE = "\n";

  if (size < 2) return "#" + NEWLINE;

  let gift = SPACE.repeat(middle) + PAD.repeat(size) + NEWLINE;

  for (let h = 1; h <= backFillHeight; h++) {
    if (h < middle) {
      gift +=
        SPACE.repeat(upperSpace) +
        PAD.repeat(1) +
        SYMBOL.repeat(backFill) +
        PAD.repeat(1) +
        SYMBOL.repeat(dynamicBackFill) +
        PAD.repeat(1) +
        NEWLINE;
      dynamicBackFill++;
      upperSpace--;
    } else if (h === middle) {
      gift +=
        PAD.repeat(size) + SYMBOL.repeat(backFill) + PAD.repeat(1) + NEWLINE;
      dynamicBackFill--;
    } else if (h > middle) {
      gift +=
        PAD.repeat(1) +
        SYMBOL.repeat(backFill) +
        PAD.repeat(1) +
        SYMBOL.repeat(dynamicBackFill) +
        PAD.repeat(1) +
        NEWLINE;
      dynamicBackFill--;
    }
  }

  gift += PAD.repeat(size) + NEWLINE;

  return gift;
}
```