function createChristmasTree(ornaments, height) {
  const sumOfTheNFirstIntegers = (height * (height + 1)) / 2;
  const ornamentsString = ornaments.repeat(sumOfTheNFirstIntegers);
  const ornamentsAsLine = ornamentsString
    .split("")
    .slice(0, sumOfTheNFirstIntegers);

  const space = " ";
  const newLine = "\n";
  let tree = "";
  let ornamentIndex = 0;

  for (let i = 0; i < height; i++) {
    tree += space.repeat(Math.floor(height - 1 - i));
    tree += ornamentsAsLine
      .slice(ornamentIndex, ornamentIndex + i + 1)
      .join(space);
    tree += newLine;
    ornamentIndex += i + 1;
  }

  return tree + space.repeat(Math.floor(height - 1 / 2)) + "|" + newLine;
}

export default createChristmasTree;
