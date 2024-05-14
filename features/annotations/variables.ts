let apples: number = 5
apples = 10
// apples = "error"

// no type inference
let bananas
bananas = 5

let speed: string = 'fast'
// speed = 10

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.info(i)
}

// When to use annotations
// 1) Function that returns the "any" type
const json = '{"x":10, "y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.info(coordinates) // {x:10, y:20}

// 2) when we declare a variable on one line
// and initalize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) Varable whose type connot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
