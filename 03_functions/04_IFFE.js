// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// arrow function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("aman")