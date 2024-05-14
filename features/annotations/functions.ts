// Declaration of variabl types and returning type
const add = (a: number, b: number): number => {
  return a + b
}

// It is possible to not declare the return type, but...
const add_2 = (a: number, b: number) => {
  return a + b
}

// It would expected that the function would return the difference
// but the function does not return anything
const sunstract = (a: number, b: number) => {
  a - b
}

// instead always declare returning type
const sunstract_2 = (a: number, b: number): number => {
  return a - b
}

// Named function
function divide(a: number, b: number): number {
  return a / b
}

// Anonumous function
const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

// Destructuring with types
const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

logWeather(todaysWeather)

//ES2015
const logWeather_ES2015 = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}) => {
  console.log(date)
  console.log(weather)
}
