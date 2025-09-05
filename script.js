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

// to assign ID for new orders
let newOrderId = 0

// our menu
const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaaian", price: 10},
    {name: "Veggie", price: 9},
    {name: "Jollof R", price: 12},
]

// cash in the register
let cashInRegister = 100

// keep track or our orders in the queue
// so workers in the kitchen know what happens next
const orderQueue = []

// make a utility function that takes a pizza object and add to the menu
function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}
addNewPizza({name: "Chicken", price: 8})
console.log(menu)

// make another utility function that placeOrder that takes pizza name
// finds the pizza obj in the menu
// adds the income to the cashRegister
// pushes a new order to the orderQueue {pizza: slectedPizzaObj, status: ordered}
// returns the newOrder object incase we need it later

// function placeOrder(pizzaName) {
//     menu.forEach((pizz) => {
//         if (pizz.name === pizzaName){
//             cashInRegister += pizz.price
//             orderQueue.push({"pizza": pizz, "status": "ordered"})
//             return pizz
//         }
//     })

//     //menu.find(pizza => pizza.name === pizzaName)
// }

// let myNewOrder = placeOrder("Pepperoni")

// console.log(cashInRegister) // 110
// console.log(orderQueue) // { "pizza": { "name": "Pepperoni", "price": 10 },"status": "ordered"}
// console.log(myNewOrder) // undefines

function placeOrder(pizzaName) {
    // .find() is am array method used to find an item in the array
    // you provide a callback function and 
    // .find() will iterate the array for the item where the fn is true
    // then return the item
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    newOrderId++
    let orderId = newOrderId
    const newOrder = {id: orderId, pizza: selectedPizza, status: "Ordered"}
    orderQueue.push(newOrder)
    return newOrder
}
let myNewOrder = placeOrder("Pepperoni")
let myNewOrder2 = placeOrder("Veggie")
console.log(cashInRegister)
console.log(orderQueue) 
console.log(myNewOrder) 

/**
 * Challenge: Write another utility function, completedOrder, that takes an orderID as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed"
 * for good measure, return the found order from the funtion
 * 
 * Note: you will need to ensure that we are adding IDs to our orders when we create new orders.
 * You can use a global newOrder that increaments when new order is created.
 * this simulates ID we will get from database in real app
 */

function completeOrder(orderId) {
    const order = orderQueue.find(orderObj => orderObj.id === orderId)
    order.status = "completed"
    return order

    // i did not know that we could pick an element from an array like this using array Method
    // const order = orderQueue.find(orderObj => orderObj.id === orderId)

    // and then modify it 'order.status = "completed"'

    //this is way shorter and looks more explanatory than .forEach
}

// IT WORKS
completeOrder(1) // 
// {
//     "id": 1,
//     "pizza": {
//         "name": "Pepperoni",
//         "price": 10
//     },
//     "status": "completed"
// }
console.log(orderQueue) 