function drawGift(size, symbol) {
  const totalHeight = (size - 1) * 2 + 1;
  const backFillHeight = totalHeight - 2;
  const backFill = (size + 1) / 2;
  const middle = Math.ceil(backFillHeight / 2);
  let lineCount = middle - 1;

  const PAD = "#";
  const SPACE = " ";
  const SYMBOL = symbol;

  let gift = "";

  gift = SPACE.repeat(middle) + PAD.repeat(size) + "\n";

  for (let h = 1; h <= backFillHeight; h++) {
    if (h < middle) {
      gift +=
        SPACE.repeat(lineCount) +
        PAD.repeat(1) +
        SYMBOL.repeat(backFill) +
        PAD.repeat(1) +
        SYMBOL.repeat(backFill - lineCount) +
        PAD.repeat(1) +
        "\n";
      lineCount--;
    } else if (h === middle) {
      gift += PAD.repeat(size) + SYMBOL.repeat(backFill) + PAD.repeat(1) + "\n";
      lineCount = 1;
    } else if (h > middle) {
      gift +=
        PAD.repeat(1) +
        SYMBOL.repeat(backFill) +
        PAD.repeat(1) +
        SYMBOL.repeat(backFill - lineCount) +
        PAD.repeat(1) +
        SPACE.repeat(lineCount) +
        "\n";
      lineCount++;
    }
  }

  gift += PAD.repeat(size) + SPACE.repeat(middle) + "\n";

  return gift;
}

export default drawGift;
