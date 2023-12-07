function drawGift(size, symbol) {
  const giftHeightAndWidth = (size - 1) * 2 + 1; // 7
  const gift = [];
  const PAD = "#";
  const SPACE = " ";
  const SYMBOL = symbol;
  let start = size - 1; // 4
  const end = giftHeightAndWidth;
  let giftLine;

  for (let i = 0; i < size; i++) {
    giftLine = Array(giftHeightAndWidth)
      .fill("")
      .map((_, j) => {
        if (i === 0) {
          return j >= start && j < end ? PAD : SPACE;
        } else {
          if (j === start + 1 || j === start + 2) {
            return SYMBOL;
          } else if (j === start || (j > start && j < end)) {
            return PAD;
          } else {
            return SPACE;
          }
        }
      })
      .join("");

    gift.push(giftLine);

    start--;
  }

  return gift.join("\n");
}

// console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));

export default drawGift;
