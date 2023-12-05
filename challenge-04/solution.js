function decode(message) {
  const stack = [];
  let currentWord = "";

  for (const char of message) {
    if (char === "(") {
      stack.push(currentWord);
      currentWord = "";
    } else if (char === ")") {
      currentWord = stack.pop() + currentWord.split("").reverse().join("");
    } else {
      currentWord += char;
    }
  }

  return stack.length > 0 ? stack.pop() + currentWord : currentWord;
}

export default decode;
