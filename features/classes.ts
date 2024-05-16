// public - can be called from enywhere
// private - can be called only by methods within a class (hide the method from other developers)
// protected - can be called by other methods in a class, or by other methods in child classes

class Vihicle {
  //  color: string
  //  constructor(color: string) {
  //  this.color = color
  //  }

  // shorted version
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep')
  }
}

class Car extends Vihicle {
  constructor(public wheels: number, color: string) {
    // reference to parent class
    super(color)
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
  }
}

const someCar = new Car(4, 'red')
someCar.startDrivingProcess()
