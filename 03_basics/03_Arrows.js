const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`); 
        console.log(this); 
    }
    // this. -> current context ko refer karta hai 
}

/*
user.welcomeMessage()  // hitesh, welcome to website
user.username = "sam"
// current context change
user.welcomeMessage()  // sam, welcome to website
*/

// console.log(this);  // {}    -> empty object 

// function chai() {
//     let username = "hitesh"
//     console.log(this); 
// }
// chai()

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);  // undefined
// }
// chai()

// we use this in object not in function 



// ARROW FUNCTION 
// const chai = function () {
//     let username  = "hitesh"
//     console.log(this); 
// }

// or by using arrow func
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()  // {}

// option 1
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//option 2
// const addTwo = (num1, num2) => num1 + num2   // inclusive  // not need to write return 
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4))  // 7 

// const addTwo = (num1, num2) => ({username : "hitesh"})  // object hai to {}
// console.log(addTwo(3,4))  // hitesh 

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => {})