function drawGift(size, symbol) {
  const giftHeightAndWidth = (size - 1) * 2 + 1; // 7
  const gift = [];
  const PAD = "#";
  let start = size - 1// 4
  const end = giftHeightAndWidth
  let giftLine;

  for (let i = 0; i < size; i++) {
    giftLine = Array(giftHeightAndWidth).fill("").map((_, i) => {
      if (i >= start && i <= end) {
        return PAD
      } else if () {
        return symbol
      } else {
        return " "
      }
    }).join("");

    gift.push(giftLine);

    start--
  }

  return gift.join("\n");
}

console.log(drawGift(4, '+'))

export default drawGift;
