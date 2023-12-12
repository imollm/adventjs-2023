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

export default organizeGifts;
