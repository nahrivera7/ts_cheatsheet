class Person {
  private personAge: number
  private personId: string
  private name: string

  constructor(age: number, personId: string, name: string) {
    this.personAge = age
    this.personId = personId
    this.name = name
  }
}

class Student extends Person {
  private enroll: boolean

  constructor(age: number, personId: string, name: string, enroll: boolean) {
    super(age, personId, name)
    this.enroll = enroll
  }
}

let newPerson: Person = new Person(12, '3425156', 'Omar')
let newStudent: Student = new Student(12, '3425156', 'Omar', true)

// If we try to store a Student as a Person, it doesn't throw any error,
// because TypeScript assumes that every Student is a Person (because the class Student extends the class Person)
newPerson = newStudent

// But if we try to do the opposite, it will throw an error 🤯🤬
// becase a Person is not necessarily a Student, can be a Teacher for example.
// So TypeScript show us that the property 'enroll' is missing in the variable newPerson, which is true:
newStudent = newPerson
