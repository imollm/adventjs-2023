function findFirstRepeated(gifts) {
  const seen = new Set();

  for (const gift of gifts) {
    if (seen.has(gift)) return gift;
    seen.add(gift);
  }

  return -1;
}

export default findFirstRepeated;
