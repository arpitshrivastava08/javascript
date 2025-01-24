// if

/*
if(true) {
    // excute hoga 
}
if(false){
    // execute nhi hoga 
}

const isUserLoggedIn = true; 
if(isUserLoggedIn){
}

// <, >, <=, >=, ==, !=, ===
if( 2 == "2") {
    console.log("exexuted"); 
} // exexuted

if( 2 === "2") {
    console.log("executed"); 
}  // nothing return 

const temperature = 41
if(temperature < 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50"); 
}

const score = 200
if(score > 100) {
    const power = "fly"
    console.log(`User power : ${power}`); 
}
console.log(`User power : ${power}`); 
// scope of power not defined
// not use var bcz in var bahar bhi le lega scope ke 
*/

/*
const balance = 1000
if(balance > 500) console.log("test"); 
// to terminate this use ; 
// if(balance > 500) console.log("test1"),
// console.log("test2");   // also use to multiline but immature code
*/

/*
if (balance < 500) {
    console.log("less than 500"); 
} else if (balance < 750) {
    console.log("lass than 750"); 
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); 
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course"); 
}
if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in "); 
}
