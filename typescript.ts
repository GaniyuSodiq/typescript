// OBLIGATORY TYPES BASICS

//###Primitive types defination
// assigning variables in TypeScript
// let myName = "Bob"
// myName = 5 
// this would work in js. 
// And it is a bad practice in real world code
let myName: string = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false


//### Defining Custom Types
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


//###Nested Object Types
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
    address: Address
}


let person3: Personmore = {
    name: "Joe",
    age: 42,
    isStudent: true, 
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
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