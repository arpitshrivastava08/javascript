const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
// agar new keyword nahi use karenge to value overwrite ho jaegi
// jab bhi new keyword use karte hai to pehle ek empty{} create hota hai jise instance kehte hai
// step2 -> constructor function call hota hai new keyword ke karan
// step3 -> this keyword instance ko point karta hai
// step4 -> return this se instance return hota hai
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);