function getIndexsForPalindrome(word) {
  const wordAsArray = word.split("");

  if (wordAsArray.at(0) !== wordAsArray.at(-1)) return null;

  return [];
}

export default getIndexsForPalindrome;
