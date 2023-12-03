function manufacture(gifts, materials) {
  const materialsSet = new Set(materials);
  return gifts.filter(
    (gift) => !Array.from(gift).some((letter) => !materialsSet.has(letter))
  );
}

export default manufacture;
