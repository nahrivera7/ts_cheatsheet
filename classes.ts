// With TypeScript we can handle classes, its variables and methods.
class Transportation {

  // We are going to create two variables with their respective types:
  private speed: number
  private type: string

  // To instanciate this class, we will expect the previous variables to be initialized.
  // As we define the types previously, we'll also define the same types here,
  // because we expect to store this values on the Class variables,
  // if they don't match, then they will throw an error.
  constructor(speed: number, type: string) {
    this.speed = speed
    this.type = type
  }

  getSpeed() {
    return this.speed
  }

  setSpeed(newSpeed: number) {
    this.speed = newSpeed
  }
  
  getType() {
    return this.type
  }

  setType(newType: string) {
    this.type = newType
  }
}

// In the next sentence we are instantiating our previous class,
// we add the type "Transportation" so it can understand we are talking about the class with name "Transportation"
const cityTransportation: Transportation = new Transportation(30, 'ground')
