/*
let score = "33"

//const {score} = req.body 
// AS we not predict that score is in which datatype 

console.log(typeof score); 
console.log(typeof(score)); 

let valueInNumber = Number(score)
// as we seen in terminal if the data type is int then o/p is "number" 
//and to typecast it into number we have to write "Number"
console.log(typeof valueInNumber); 
*/

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

/*
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); 
console.log(typeof stringNumber); 
*/

// **************OPERATIONS**************

/*
let value = 3
let negvalue = -value
// console.log(negvalue); 

// console.log(2+2); 
// console.log(2-2); 
// console.log(2*2); 
// console.log(2**3);
// console.log(2/3); 
// console.log(2%3); 

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3); 

console.log("1" + 2);  // 12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

// Always use parenthesis why messy code?
console.log((3+4) * 5 % 3); 
*/

// console.log(+true);  // o/p 1
// console.log(true+);   //o/p error
// console.log(+"");  //o/p 0

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2
// console.log(num1)

let gameCounter = 100
++gameCounter; 
console.log(gameCounter);


// link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.
// html#sec-type-conversion 