// Typescript cheatsheet


// When we don't assign any value for our variables, type inference will define its type by itself
let firstName = 'Maria'

// We can declare the type in this way
let a: string = 'hello'
a = 'hi'

// In the previous lines, we declare a variable with type 'string', it means we can't store any other data type but 'string' there.
// For example, this will be wrong:
// a = 4 <= Because 4 is a 'number'


// In this other example, we use type 'number':
let b: number = 10

// As we saw it in the previous example, now that we have a 'number' type, we can't store a value as 'string'.
// In this case, this will throw an error:
// b = a <= Because 'a' is storing a 'string'

// But this example instead won't throw any error:
b = 20

// We can also add numbers here, because the answer is still being a 'number':
b = 10 + 10

const num1 = 20
const num2 = 40

// Or add variables that are numbers:
b = num1 + num2

// We can add types to functions too:
function sum( num1: number, num2: number ): number {
  return num1 + num2
}

// If we execute the function with this parameters, it will work:
sum(1, 2)

// If we try to use any other data type but number, it will not work. For example:
// sum(1, '1')


// TypeScript also can permit a type called 'any', is not ideal, but we can use it if we don't know which data type we will use yet.
// This type can store any data type as its name says.
let anyValue: any = 10
anyValue = 'Hey there!'

// We also have the type keyword, here we can define a new type to be used later:
type id = number

// After I declare a new type, I can use it in the same way as other types:
let idNumber: id = 1234

// In this case, I can't store a 'string' in the idNumber variable because it's expecting an id, and the id type is a 'number'.
// So this example will throw an error:
// idNumber = '1234'
