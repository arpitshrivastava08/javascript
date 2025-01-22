/*
function sayMyName(){
    console.log("H"); 
    console.log("I"); 
    console.log("T");
    console.log("E"); 
    console.log("S");
    console.log("H"); 
}

// sayMyName // its by reference   // no return something 
sayMyName()  // function call;
*/


/*
// by defining funcn we use parameter i.e. number1 and number2 is parameter 
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2); 
}
// addTwoNumbers() // NaN
// in calling a funcn we use arguement i.e. 3 and 4 are arguement 
addTwoNumbers(3,4);   // 7
addTwoNumbers(3,"4");  // 34
addTwoNumbers(3,"a");  // 3a 
addTwoNumbers(3, null);  // 3

const result = addTwoNumbers(3,5)
console.log("Result : ", result);  // 8, Result :  undefined
*/

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result 
//     console.log("Hitesh")  // ureachable code after refturn funcn 
// }

// function addTwoNumbers(number1, number2) {
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  // Result: 8

/*
function loginUserMessage(username) {
    // if(username === undefined) {
    //     console.log("Please enter a username ");
    //     return
    // }
    // also 
    if(!username) {
        console.log("Please enter a username"); 
        return 
    }

    return `${username} just logged in`
}

// also to avoid checking we assign a default value 
// function loginUserMessage(username = "dev"){
// }

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
// o/p - Please enter a username 
//       undefined 
*/


// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))  // 200

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))  // 500, 2000 rest operator 
// ... rest operator

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([200, 400, 500, 1000])); 