function manufacture(gifts, materials) {
  const canBeMade = [];
  let canBeAdded = true;
  const materialsSplitted = materials.split("");

  for (const gift of gifts) {
    const giftSplitted = gift.split("");

    for (const letter of giftSplitted) {
      if (!materialsSplitted.includes(letter)) {
        canBeAdded = false;
      }
    }

    if (canBeAdded) {
      canBeMade.push(gift);
      canBeAdded = true;
    }
  }

  return canBeMade;
}

export default manufacture;
