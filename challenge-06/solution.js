function maxDistance(movements) {
  let result = 0;
  const moveAsArray = Array.from(movements);
  const left = moveAsArray.at(0) === "<" ? 1 : -1;
  const right = left * -1;
  const forwardOrBackward = 1;

  for (const move of moveAsArray) {
    if (move === "<") {
      result += left;
    } else if (move === ">") {
      result += right;
    } else if (move === "*") {
      result += forwardOrBackward;
    }
  }

  return result;
}

export default maxDistance;
