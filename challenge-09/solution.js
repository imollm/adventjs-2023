function adjustLights(lights) {
  let changesRed = 0;
  let changesGreen = 0;

  const actions = {
    true: () => changesRed++,
    false: () => changesGreen++,
  };

  const isEven = {
    true: (i) => actions[lights[i] !== "🔴"](),
    false: (i) => actions[lights[i] !== "🟢"](),
  };

  for (let i = 0; i < lights.length; i++) {
    isEven[i % 2 === 0](i);
  }

  return Math.min(changesRed, changesGreen);
}

export default adjustLights;
