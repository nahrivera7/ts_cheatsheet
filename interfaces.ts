// First, do you remember the type keyword?
// Here we are using a type keyword to create a new type for us, in this case "personId" which is a number.
type personId = number

// An interface in TypeScript is an object structure, so we know what does this object expects to have.
// We write the properties inside and its type.
interface PersonInterface {
  height: number,
  // A question mark ('?') means this property is optional.
  age?: number, 
  firstName: string,
  lastName: string,
  id: personId
}

// Then when we create our person, if this object has missing properties,
// it will throw an error. In this case, the only missing property is "Age",
// but age is optional, so we are ready to go!
const personWhitInterface: PersonInterface = {
  height: 1.7,
  firstName: 'Natalia',
  lastName: 'Hashimoto',
  id: 123345
}
