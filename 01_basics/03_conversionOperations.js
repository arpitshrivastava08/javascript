let score = "33"

//const {score} = req.body 
// AS we not predict that score is in which datatype 

console.log(typeof score); 
console.log(typeof(score)); 

let valueInNumber = Number(score)
// as we seen in terminal if the data type is int then o/p is "number" 
//and to typecast it into number we have to write "Number"
console.log(typeof valueInNumber); 

/*
score = "33abc"
valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber)  // o/p NaN 
*/

/*
score = null
valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber)  // o/p 0
*/

/*
score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber)  // o/p NaN
*/

/*
score = true
valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber)  // o/p 1
*/

/*
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true
*/

/*
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false
*/

/*
let isLoggedIn = "Hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true
*/

// 1 => true; 0 => false
// "" => false; "Hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); 
console.log(typeof stringNumber); 
