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

// Create a pizza object type
// custom types can be handy here when we create objects bcs obj can be manny with many props
type Pizza = {
    id: number,
    name: string,
    price: number
}

// Order object type

// we can add more type safety to our order status so it is "ordered | "completed"
type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

// cash in the register
let cashInRegister = 100

// to assign ID for new orders
let newOrderId = 0
let nextPizzaId = 1

// our menu
const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margherita", price: 8},
    {id: nextPizzaId++, name: "Pepperoni", price: 10},
    {id: nextPizzaId++, name: "Hawaaian", price: 10},
    {id: nextPizzaId++, name: "Veggie", price: 9},
    {id: nextPizzaId++, name: "Jollof", price: 12},
]


// keep track or our orders in the queue
// so workers in the kitchen know what happens next
const orderQueue: Order[] = []

// make a utility function that takes a pizza object and add to the menu
// function addNewPizza(pizzaObj: Pizza): void{
//     pizzaObj.id = nextPizzaId++
//     menu.push(pizzaObj)
// }

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{
    // pizzaObj.id = nextPizzaId++
    const newPizza: Pizza = {id: nextPizzaId++, ...pizzaObj}
    menu.push(newPizza)
    return newPizza
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

function placeOrder(pizzaName: string): Order | undefined {
    // .find() is am array method used to find an item in the array
    // you provide a callback function and 
    // .find() will iterate the array for the item where the fn is true
    // then return the item
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    // cashInRegister += selectedPizza.price
    // in typesript selectedPizza says: selectedPizza is possibly undefined
    // what ts is saying here is that selectedPizza could be undefined bcs it is made from..
    // using pizzaName to search through the meny array, and this pizzaName could be undefined easily.
    // to satisfy ts, we can code a bit more defensively
    // by telling our program what to do if pizzaName comeback as undefined if (selectedPizza === undefined)
    // or any falsy value if (!selectedPizza). Then we return from this function
    if (!selectedPizza){
        console.error(`${pizzaName} does not exist in the Menu`)
        return
    }
    cashInRegister += selectedPizza.price
    newOrderId++
    let orderId = newOrderId
    const newOrder: Order = {id: orderId, pizza: selectedPizza, status: "ordered"}
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


function completeOrder(orderId: number): Order {
    // 'orderId: number' is to indicate to ts that d para expected is number
    // the right way of decaring variable is ts
    // let myName: string = "Bob"
    // let numberOfWheels: number = 4
    // let isStudent: boolean = false 
    // WRONG CODE TO FIX order ts error - i was targeting orderID instead of order itself
    // if (!(orderId >= 0 && orderId <= orderQueue.length)){
    //     console.error(`The orderID given is incorrect`)
    //     return
    // }
    const order = orderQueue.find(orderObj => orderObj.id === orderId)
    if (!order){
        // we caould use only throw. It serves both informing the error and stop the fn
        // just what consolelog does and what return does for fn. throw is 2 in 1        
        throw new Error(`The ${orderId} was not found in the order queue`);
        // console.error(`The ${orderId} was not found in the order queue`)
        // return
    }
    order.status = "completed"
    return order

    // i did not know that we could pick an element from an array like this using array Method
    // const order = orderQueue.find(orderObj => orderObj.id === orderId)

    // and then modify it 'order.status = "completed"'
    // and it will reflect in the orderQueue array

    // we even took out the new order using 'return order'

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

// THIS PROJECT IS MEARNT TO SHOW THE ERROR IN JAVASCRIPT
// AND HOW TYPESCRIPT CAN HELP - although i have corrected some of this errors 
// one that could lead to error is 'const cashInRegister = 100'
// it would have been TypeError
// and typeerror can crash our app in production.. if it gets pass the test here
// also someone could call 'completeOrder(1)' with string parameter like completeOrder("1")
// this would crash our program as well

// LETS MOVE OUR CODE TO TYPESCRIPT AND SEE MORE ERRORS WE COULD FIX

// WE NOW WRITE IN typescript.ts file

// 

// we now remove all the errors we brought from js
// for errors not to show in our ts code doesnt mean the code is 100% ts okay
// however, it is a good step

//## TYPE NARROWING
// we want this type to be string or number 
// bcs we want to take in number or string from the user
type Identifier = string | number 
// this works 'function (identifier: Identifier){}'
// this too works 'identifier: string | number'

// type narrowing is when we are expecting a value but we dont know what the type woud be
// type script allows us to narrow dow in this way 
function getPizzaDetail(identifier: string | number): Pizza | undefined{
    // find the pizza using string or number 
    // the return data type can either be Pizza or undefined. 
    // ... we put them for future devs to know
    if(typeof identifier === "string"){ // try to be as explicit as you can - TS wants that!
        return menu.find(pizzaObj => pizzaObj.name.toLocaleUpperCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number"){
        return menu.find(pizzaObj => pizzaObj.id === identifier)
    } else{
        throw new Error("Parameter `identifier` must be either a string or a number");        
    }
}

//## VOID RETURN TYPE
// there is another return that is not as obvios as we declared Pizza | undefined...
// ... getPizzaDetail
// Void is when you have function that does not return anything
// e.g function addNewPizza(pizzaObj: Pizza): void
// we use it to tell future dev that we dont expect this fn to return anything