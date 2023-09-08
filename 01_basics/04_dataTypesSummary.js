// primitive

// 7 types : String, Number, Boolean, Null, undefined, symbol, Bigint


const name = "aman"
const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined
const id = Symbol('123')
const Bigint = 6149064028560283n;

// reference (non-primitive)

//array,objevcts,functions

const heres = [ "aman", "kamran", "rehan", "nawazish"];

let myObj = {
    name: "aman",
    age : 22,
}

const myFunction = function(){
    console.log("hello Everyone");
}


//****************************************

// Stack(primitive) -> copy

let myYoutubename = "youtubesrioz"

let anothername = myYoutubename

anothername = "amanop"

console.log(myYoutubename);
console.log(anothername);

// heap (non-primitive) -> reference

let userone = {
    email: "aman@gmail.com",
    upi: "abc@ybl"
}

let usertwo = userone
usertwo.email = "mdaman@gmial.com"

console.log(userone);
console.log(usertwo);