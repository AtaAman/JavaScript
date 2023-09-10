// array

const myArr = [0, 1, 2, 3,  4,  5, 6]
const myHeros = ["thor", "ironman"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr);
// console.log(myArr2);
// console.log(myHeros);

// array methods

// myArr.push(7)
// myArr.pop()
// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(4)); // boolean check elemnt available or not
// console.log(myArr.indexOf(4));

const newArr = myArr.join() // changing array element into strings

// console.log(typeof newArr); 

// slice , splice 

const myNewArr = myArr.slice(0,3) // only slice but not change original array value

const myNewArr1 = myArr.splice(0,3) //slice + changing original array too


console.log(myNewArr1);
console.log(myNewArr);
console.log(myArr);
