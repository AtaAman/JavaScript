function sayMyName(){
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("m");
    console.log("d");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("aman"))
// // console.log(loginUserMessage("aman"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// object in functions...............

// const user = {
//     username: "aman",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// we can use object as reference too

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// array in function

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// we use array in refrence too

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));