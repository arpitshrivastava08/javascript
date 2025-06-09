// Primitive
// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive)
// Arrays, Objects, Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false

const bigNumber = 34564334567754444n

const heros = ["shaktiman", "naagraj", "doga"]; 
let myObj = {
    name : "Hitesh",
    age : 22,
}

const myfunction = function(){
    console.log("Hello world"); 
}

console.log(typeof myfunction)
console.log(typeof heros);
console.log(typeof anotherId); 

// https://262.emca-international.org/5.1/#sec-11.4.3

// 1)Primitive datatype
// a)Number=>number
// b)String=>string
// c)Boolean=>boolean
// d)Symbol=>symbol
// e)Bigint=>bigint
// f)Null=>object
// g)Undefined=>undefined

// 2)Non-Primitive (reference)
// a)Function=>function object
// b)Object(key value pair)=>object
// c)Array=>object


// **********************************************
// Stack (Primitive) , Heap(Non-Primitive) 

/* 
//Pass by value
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)
*/

/* 
//Pass by reference
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@goole.com"
console.log(userOne.email);
console.log(userTwo.email); 
*/