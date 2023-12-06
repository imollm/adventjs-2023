# Challenge 5: 🛷 Santa's CyberTruck

<img src="https://adventjs.dev/challenges-2023/5.png" alt="challange-04" width="40px" height="40px" />

## Instructions

<p>Santa 🎅 is testing his new electric sled, the <em>CyberReindeer</em>, on a North Pole road. The road is represented by a string of characters, where:</p>
<ul>
<li><code>.</code> = Road</li>
<li><code>S</code> = Santa's Sled</li>
<li><code>*</code> = Open barrier</li>
<li><code>|</code> = Closed barrier</li>
</ul>
<p>Example of a road: <code>S...|....|.....</code></p>
<p>Each unit of time, <strong style="color:rgb(250 202 21)">the sled moves one position to the right</strong>. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.</p>
<p><strong style="color:rgb(250 202 21)">All barriers start closed</strong>, but after 5 units of time, they all open <strong style="color:rgb(250 202 21)">forever</strong>.</p>
<p><strong style="color:rgb(250 202 21)">Create a function that simulates the sled's movement</strong> for a given time and <strong style="color:rgb(250 202 21)">returns an array</strong> of strings representing the state of the road at each unit of time:</p>

```js
const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
```

<p>The result is an <strong style="color:rgb(250 202 21)">array where each element shows the road at each unit of time</strong>.</p>
<p>Take into account that <strong style="color:rgb(250 202 21)">if the sled is in the same position as a barrier</strong>, then it takes its place in the array.</p>
<p>The elves were <strong style="color:rgb(250 202 21)">inspired by this <a href="https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript">Code Wars challenge</a></strong>.</p>

# Solution
### Completed with 110 points
```js
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
```