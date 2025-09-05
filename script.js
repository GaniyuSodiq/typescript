//  WHY LEARN TYPESCRIPT

// 1- Confidence
// TypeScript reduces runtime error that could crash your App.
// TypeScript checks your code at compile time and informs you of errors,
// so you fix them asap.
// A little bit of extra planning using TypeScript can save you alot...
// of time in the future.

// 2- Productivity
// TypeScript improves your Seveloper Experience (DX) by enabling
// Autocomplete. Immediate Error Checking. Refactoring Capabilities

// 3- Employerability
// TypeScript is considered import in most organizations now
// They want you to know TypeScript even if they dont list in in Job Description


// IMPROVEMENTS THAT TYPESCRIPT BRINGS COMPARED TO JAVASCRIPT
// we will see the difference by creating a simple restaurant app


// our menu
const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaaian", price: 10},
    {name: "Veggie", price: 9},
    {name: "Jollof R", price: 12},
]


// cash in the register
const cashInRegister = 100

// keep track or our orders in the queue
// so workers in the kitchen know what happens next
const orderQueue = []

// make a utility function that takes a pizza object and add to the menu

function addNewPizza(newPizza){
    menu.push(newPizza)
}

addNewPizza({name: "Chicken", price: 8})
console.log(menu)
