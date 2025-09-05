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


// our menujs
const menujs = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaaian", price: 10},
    {name: "Veggie", price: 9},
    {name: "Jollof R", price: 12},
]

// cash in the register
let cashInRegisterjs = 100

// to assign ID for new orders
let newOrderIdjs = 0

// keep track or our orders in the queue
// so workers in the kitchen know what happens next
const orderQueuejs = []

// make a utility function that takes a pizza object and add to the menujs
function addNewPizzajs(pizzaObj){
    menujs.push(pizzaObj)
}
addNewPizzajs({name: "Chicken", price: 8})
console.log(menujs)

// make another utility function that placeOrderjs that takes pizza name
// finds the pizza obj in the menujs
// adds the income to the cashRegister
// pushes a new order to the orderQueuejs {pizza: slectedPizzaObj, status: ordered}
// returns the newOrder object incase we need it later

// function placeOrderjs(pizzaName) {
//     menujs.forEach((pizz) => {
//         if (pizz.name === pizzaName){
//             cashInRegisterjs += pizz.price
//             orderQueuejs.push({"pizza": pizz, "status": "ordered"})
//             return pizz
//         }
//     })

//     //menujs.find(pizza => pizza.name === pizzaName)
// }

// let myNewOrder = placeOrderjs("Pepperoni")

// console.log(cashInRegisterjs) // 110
// console.log(orderQueuejs) // { "pizza": { "name": "Pepperoni", "price": 10 },"status": "ordered"}
// console.log(myNewOrder) // undefines

function placeOrderjs(pizzaName) {
    // .find() is am array method used to find an item in the array
    // you provide a callback function and 
    // .find() will iterate the array for the item where the fn is true
    // then return the item
    const selectedPizza = menujs.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegisterjs += selectedPizza.price
    newOrderIdjs++
    let orderId = newOrderIdjs
    const newOrder = {id: orderId, pizza: selectedPizza, status: "Ordered"}
    orderQueuejs.push(newOrder)
    return newOrder
}
let myNewOrderjs = placeOrderjs("Pepperoni")
let myNewOrder2js = placeOrderjs("Veggie")
console.log(cashInRegisterjs)
console.log(orderQueuejs) 
console.log(myNewOrder) 

/**
 * Challenge: Write another utility function, completedOrder, that takes an orderID as a parameter
 * finds the correct order in the orderQueuejs, and marks its status as "completed"
 * for good measure, return the found order from the funtion
 * 
 * Note: you will need to ensure that we are adding IDs to our orders when we create new orders.
 * You can use a global newOrder that increaments when new order is created.
 * this simulates ID we will get from database in real app
 */

function completeOrderjs(orderId) {
    const order = orderQueuejs.find(orderObj => orderObj.id === orderId)
    order.status = "completed"
    return order

    // i did not know that we could pick an element from an array like this using array Method
    // const order = orderQueuejs.find(orderObj => orderObj.id === orderId)

    // and then modify it 'order.status = "completed"'

    //this is way shorter and looks more explanatory than .forEach
}

// IT WORKS
completeOrderjs(1) // 
// {
//     "id": 1,
//     "pizza": {
//         "name": "Pepperoni",
//         "price": 10
//     },
//     "status": "completed"
// }
console.log(orderQueuejs) 

// THIS PROJECT IS MEARNT TO SHOW THE ERROR IN JAVASCRIPT
// AND HOW TYPESCRIPT CAN HELP - although i have corrected some of this errors 
// one that could lead to error is 'const cashInRegisterjs = 100'
// it would have been TypeError
// and typeerror can crash our app in production.. if it gets pass the test here
// also someone could call 'completeOrderjs(1)' with string parameter like completeOrderjs("1")
// this would crash our program as well

// LETS MOVE OUR CODE TO TYPESCRIPT AND SEE MORE ERRORS WE COULD FIX

// this wouldnt work in ts
let myNamew = "Bob"
myNamew = 5 