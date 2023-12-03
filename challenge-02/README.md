# Challenge 2: 🏭 We start the factory

<img src="https://adventjs.dev/challenges-2023/2.png" alt="challange-02" width="40px" height="40px" />

## Instructions

<p>In Santa's workshop, the elves have a <strong style="color:rgb(250 202 21)">gift list</strong> they wish to make and a limited set of materials.</p>
<p><em>Gifts are strings of text</em> and <em>materials are characters</em>. Your task is to write a function that, given a list of gifts and the available materials, returns a <strong style="color:rgb(250 202 21)">list of the gifts that can be made</strong>.</p>

```js
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```

# Solution
### Completed with 270 points
```js
function manufacture(gifts, materials) {
    const canBeMade = []
    let canBeAdded = true
    const materialsSplitted = materials.split('')

    for (const gift of gifts) {
        const giftSplitted = gift.split('')

        for (const letter of giftSplitted) {
            if (!materialsSplitted.includes(letter)) {
                canBeAdded = false
            }
        }

        if (canBeAdded) {
            canBeMade.push(gift)
            canBeAdded = true
        }
    }

    return canBeMade
}
```