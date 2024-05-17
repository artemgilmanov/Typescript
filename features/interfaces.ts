interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const someDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

const printSammary = (item: Reportable): void => {
  console.info(`Sammary:${item.summary()}`)
}

printSammary(oldCivic)
printSammary(someDrink)
