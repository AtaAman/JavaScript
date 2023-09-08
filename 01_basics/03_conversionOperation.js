let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" = 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "aman" => true

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ****************** Operations *********************

let value = 3
let negValue = -value

console.log(negValue)

// basic operators

console.log(2+4);
console.log(4-2);
console.log(2*4);
console.log(2**5);
console.log(2/3);
console.log(5%2);


let str1 = "aman"
let str2 = " ata"
let str3 = str1 + str2
console.log(str3);

console.log(1 + "2");  //12
console.log("1" + 2);  //12
console.log(1 + "2" + 1); // 121
console.log(1 + "2" + "2"); // 122
console.log(1 + 2 + "3");   // 33
console.log("1" + 1 + "2"); //112
console.log("1" + 2 + 2);  //122

console.log( (3+4)) * 5 % 2; // use brackets

let gameCounter = 100
gameCounter++;
console.log(gameCounter);


