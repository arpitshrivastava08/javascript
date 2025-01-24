const userEmail = "hitesh.ai"
if(userEmail) {
    console.log("Got user email"); 
} else {
    console.log("Don't have user email");
}

// ********** NOTE **********
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}
// ***************************

// const Username = []
// if (Username.length === 0) {
//     console.log("Array is empty"); 
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
}

// false == 0   // true
// false == ''  // true
// 0 == ''      // true


// Nullish Coalescing Operator (??): null undefined
let val1; 
// val1 = 5 ?? 10 
// val1 is assigned as 5  // first value assign karta hai 
// val1 = null ?? 10
// assigned val1 as 10 bcz check as it null then assign second val 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1); 


// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")