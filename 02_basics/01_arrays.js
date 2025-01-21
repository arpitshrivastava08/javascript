// array 

const myArr = [0, 1, 2, 3, 4, 5]
// const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]  // elements may be different 


// shallow copy - is a copy whose properties share same reference point 
// deep copy - is a copy whose properties do not share same reference point 
console.log(myArr[0]); 

const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); 

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)  // add 9 at 0 index then shift all 
// myArr.shift()  // used to remove element at index 0 
// console.log(myArr); 


// console.log(myArr.includes(9));  // boolean -> false
// console.log(myArr.indexOf(19));  // -1

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);  // string 
// console.log(myArr); 
// console.log(typeof myArr);  // object 


// slice , splice
console.log("A ", myArr); 
const myn1 = myArr.slice(1, 3)  // last index is not include
  
console.log(myn1); 
console.log("B ", myArr); 

const myn2 = myArr.splice(1, 3);  // last index is include 
console.log(myn2); 
console.log("C ", myArr); 

// ***** NOTE -> 
// if we use slice not change in original array 
// and if we use splice then change in original array 
