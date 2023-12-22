# Challenge 9: 🚦 Switch the lights

<img src="https://adventjs.dev/challenges-2023/9.png" alt="challange-09" width="40px" height="40px" />

## Instructions

<p>They are turning on the <strong style="color:rgb(250 202 21)">Christmas lights 🎄</strong> in the city and, as every year, they have to be fixed!</p>
<p>The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, <strong style="color:rgb(250 202 21)">they must always alternate</strong>. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.</p>
<p>We have been asked to write a function <code>adjustLights</code> that, given an array of strings with the color of each light, return the <strong style="color:rgb(250 202 21)">minimum number</strong> of lights that need to be changed for the colors to alternate.</p>

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (you change the second light to 🟢)
```

# Solution
### Completed with 340 points
```js
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

```