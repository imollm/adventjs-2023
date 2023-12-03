function findNaughtyStep(original, modified) {
  const findDifferentElement = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i];
      }
    }
    return arr1[arr1.length - 1];
  };

  let differentElement = "";
  if (original.length < modified.length) {
    differentElement = findDifferentElement(modified, original);
  } else if (original.length > modified.length) {
    differentElement = findDifferentElement(original, modified);
  }
  return differentElement;
}

export default findNaughtyStep;
