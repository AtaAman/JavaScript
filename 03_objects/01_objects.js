//singleton

//object.create

// object literals

const mySym = Symbol("mykey")

const jsUser = {
    name : "aman",
    age : 22,
    city : "khagaria",
    email : "aman@123",
    loginDays : ["monday", "friday"],
    [mySym] : "mykay" 
}

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser.[email]); // remove dot if u use brackets and items of brackets should in ""
console.log(jsUser[mySym]);

jsUser.email = "aman@google.com"
// Object.freeze(jsUser)          // can not change original value of object
jsUser.email = "aman@lms.in"
console.log(jsUser.email);

jsUser.greeting = function() {
    console.log("hello user");
}

jsUser.greetingtwo = function() {
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());