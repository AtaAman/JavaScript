const accountId = 1848
let accountEmail = "aman@gmial.com"
var accountPass = "123321"
accountCity = "khagaria" // not a good way to initialize
let accountState; // not defined if we not initialize value in it

// accountId = 2 // not allowed 

accountEmail = "ata@gmial.com"
accountPass = "6321"
accountCity = "begusarai"

/*
prefer not to use var because of 
issue in block scope and functional scope
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPass);
// console.log(accountCity);

// method to print all 

console.table([accountId,accountEmail,accountPass,accountCity,accountState])




