// console.log(2 > 1); 
// console.log(2 >= 1); 
// console.log(2 < 1); 
// console.log(2 < 1); 
// console.log(2 == 1); 
// console.log(2 != 1); 

// console.log("2" > 1);
// console.log("02" > 1);


/*
console.log(null > 0)  // false
console.log(null == 0)  // false
console.log(null >= 0)  // true

// ********REASON*********
// the reason is that an equality check == and comparisons > < >= <= work differently 
// comparisons convert null to a number , treating it as 0
// thats why (3) null >= 0 is true and (1)null >0 is false

// same problem with undefined but always give false ans 
console.log(undefined == 0);  // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
*/


// === (triple check) check value and datatype also 
console.log("2" === 2);  // false bcz datatype is different 