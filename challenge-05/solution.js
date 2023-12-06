function cyberReindeer(road, time) {
  const result = [];
  let roadAsArray = Array.from(road);
  let arrayIndex = 0;
  let lastChar = ".";
  let tmpLastChar;

  for (let second = 0; second < time; second++) {
    if (second % 5 === 0 && second > 0) {
      roadAsArray = roadAsArray.map((char) => (char === "|" ? "*" : char));
    }

    if (roadAsArray[arrayIndex] === "." || roadAsArray[arrayIndex] === "*") {
      tmpLastChar = roadAsArray[arrayIndex];
      roadAsArray[arrayIndex] = roadAsArray[arrayIndex - 1];
      roadAsArray[arrayIndex - 1] = lastChar;
      lastChar = tmpLastChar;
      arrayIndex++;
    }

    if (second === 0) {
      arrayIndex++;
    }

    result.push(roadAsArray.join(""));
  }

  return result;
}

export default cyberReindeer;
