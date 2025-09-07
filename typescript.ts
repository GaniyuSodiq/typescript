// OBLIGATORY TYPES BASICS

//###PRIMITIVE TYPES DEFINISTION
// assigning variables in TypeScript
// let myName = "Bob"
// myName = 5 
// this would work in js. 
// And it is a bad practice in real world code
let myName: string = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false


//### DEFINING CUSTOM TYPES
// we have seen how to define premitive types like string, number, boolean
// ts allows us to have our own custom types too
// we can create a new type by using the type keyword and 
// its name must start with capital letter
type Food = string
let favoriteFood: Food = "pizza" 

// using custom types for primitives wont make alot of sessionStorage...custom
// until later when we talk about unions etc

// but custom types can be handy here when we create objects bcs obj can be many
// let person = {
//     name: "Joe",
//     age: 42,
//     isStudent: true
// }

// you can have a similar object
// let person2 = {
//     name: "Jill",
//     age: 66,
//     isstudent: false
// }

// if you noticed, the isstudent is the second obj is diferent froom isStudent in the first
// this is doest shwo us any error for now, but it could be a problem later on or in prod

// what we can do is create a custom type that defines the name of the type
// and shape of the properties that will be in the types
// we indicate the property name: property type
// in ts custom obj prop, you can separate the props with comma, semicolon or just new line
// just be consistent
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

// so i can now use the custom obj type when declaring my objects
let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    // isstudent: false // typescript notify use that this is an error. and below is the right one
    isStudent: false
}


//### NESTED OBJECT TYPES
// lets say we want to add more props to our objects above
// we to include address


// type Personmore = {
//     name: string,
//     age: number,
//     isStudent: boolean
//     address: {
//         street: string,
//         city: string,
//         country: string
//     }
// }


// know that by default, the derived obj below will give error.. 
// if u dont include the address props and its inner props. 
// There is a way to make a declared prop optional... we'll see that soon.
// also you can declare the address prop separately on its own, like below
// this is usefull if you'd be using only Address type in another place

type Address = {
    street: string,
    city: string,
    country: string
}

type Personmore = {
    name: string,
    age: number,
    isStudent: boolean
    address?: Address
}

let person3: Personmore = {
    name: "Joe",
    age: 42,
    isStudent: true, 
    // address: {
    //     street: "123 Main",
    //     city: "Anytown",
    //     country: "USA"
    // }
}

let person4: Personmore = {
    name: "Jill",
    age: 66,
    isStudent: false,
        address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}


//## OPTIONAL PROPERTIES
// to make a property optional, just add ? before the colon.
// bt making a prop optional reduces the type safetiness of the obj

// lets assume that there is func that uses these objects

function displayObjInfo(theObject){
    console.log(`${theObject.name} lives at ${theObject.address.street}`)
}

displayObjInfo(person4) // works
displayObjInfo(person3) // error bcs the person3 doesnt have Address property
// you can correct this by giving the function declaration (?)
function displayObjInfo2(theObject){
    console.log(`${theObject.name} lives at ${theObject.address?.street}`)
}
// and the issue with this is that you get undefined for the optional part is it doesnt exist
displayObjInfo2(person3) // Joe lives at undefined

// the point is everytime u used optional featues, 
// you are ikely to reduce your type safety a litle bit



//## TYPE IN ARRAYS
// your irst question should be array of ehat are your decalring

let age: number = 100 // we have this in primitives but not the same in array
// this means age is a number

let ages:number[] = [100, 120, 132] // :number[] an array that consist of only numbers
// this means ages is an array of numbers

type AnotherPerson = {
    name: string,
    age: number,
    isStudent: boolean
}

const person6: AnotherPerson = {
    name: "Wale",
    age: 20,
    isStudent: true
}

const person5: AnotherPerson = {
    name: "Ngozi",
    age: 23,
    isStudent: false
}

let people: AnotherPerson[] = [person5, person6] // :AnotherPerson[] an array that consist of only AnotherPerson types
// this means people is an array of AnotherPerson data types

// array type could also be written using Array<TypeName>
let people1: Array<AnotherPerson> = [person5, person6]


//## LITERAL TYPES
let myyName = "Bob" //  'let myyName: string' when u hover myyName
// myyName = true // err: Type 'boolean' is not assignable to type 'string'.

const myyName2 = "Bob" // 'const myyName2: "Bob" ' when u hover myyName2
// this means the type of myyName2 is "Bob" or whatever string we give a const
// the reason is const's value cannot change. It takes the value & type given at declaratn
// but the value of 'let' can change which is why we have 'let myyName: string'
// meaning any other value we give this let must be string

// the behavior of const here is called 'literal types'
// we could rewrite the const variable in more descritive way like:
const myyName3: "Bob" = "Bob"

// this indicate that we can literally give a variable parmanet value
let myyName5: "Bobby" = "Bobby"
// myyName5 = "Boris" // err: Type '"Boris"' is not assignable to type '"Bobby"'.

// literal types becomes more powerful and useful when paired with Unions concept
//


