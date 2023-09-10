// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate)); // object

// let myCreatedDate = new Date(2023, 2, 23)
// let myCreatedDate = new Date(2023, 2, 23, 5, 3)
// let myCreatedDate = new Date("01-22-2023")
let myCreatedDate = new Date("2023/01/12")
// console.log(myCreatedDate.toLocaleString);

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // time on miliseconds
// console.log(myCreatedDate.getTime()); //time in miliseconds
console.log(Math.floor(Date.now()/1000)); // time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // months start from 0 default


