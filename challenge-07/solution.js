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

export default drawGift;
