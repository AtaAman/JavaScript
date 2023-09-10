const name = "aman"
const repo = 50

// console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('aman-ata')

// console.log(gameName[2]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('-'));

const newString = gameName.substring(0,3)
console.log(newString); 

const anotherString = gameName.slice(-8,6)
console.log(anotherString);

const newStringOne = "   aman  "
console.log(newStringOne);
console.log(newStringOne.trimStart());
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());

const url=("https://aman.com/aman%12ata")

console.log(url.replace('%12', '+'));

console.log(url.includes('ata'));

console.log(gameName.split('-'));