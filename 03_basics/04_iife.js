// // Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`); 
// }
// chai()


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); 
}) (); 
// for this we have to end the func with ;

// ()()  // first parenthesis for function definition and second for func call

// global scope ke pollution se problem hoti hai kai bar to uske pollution k hatane ke liye hamne iife ka use kiya hai 

( (name) => {
    // function iife
    console.log(`DB CONNECTED TWO ${name}`); 
} )('hitesh')

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`); 
// } ) ()