const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const anotherArr = [1, 2, 4,[4, 5, 3],[9, 7 , [4,  6, [4]]]]
const real_arr = anotherArr.flat(Infinity)
// console.log(real_arr);

console.log(Array.isArray("aman"));
console.log(Array.from("aman"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));