// singleton   ->  construvtor se banega 
// Object.create

// not singleton  -> literal se banta hai 
// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh", 
    "full name" : "Hitesh Choudhary",
    [mySym] : "mykey1",
    age : 18, 
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// these all name age is accessed through string bydefault in defining not using " " but for accesssing it use " "

/*
console.log(JsUser.email)  // not appropriate way 
console.log(JsUser["email"])

// console.log(JsUser.full name)  // we cannot access it 
// console.log(JsUser."full name")  // error can't access it 
console.log(JsUser["full name"])   // Right format 
*/


/*
console.log(JsUser.mySym)  // we use the symbol inside object 
console.log(typeof(JsUser.mySym))   // not a symbol it is a string 
// but actually it will not a symbol if we want to ramain it as symbol
// then use [] in Object; 
*/

// console.log(JsUser[mySym])
// console.log(typeof(JsUser.mySym))

JsUser.email = "hitesh@chatgpt.com"
// if we want that someother cannot change the value of this then use freeze
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"  // now it is not changed 
// console.log(JsUser); 

JsUser.greeting = function() {
    console.log("Helloj JS user");
}

console.log(JsUser.greeting);  // [Function (anonymous)]
console.log(JsUser.greeting());  // Helloj JS user  // undefined

JsUser.greetingTwo = function() {
    console.log(`Helloj JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());   // Helloj Js user, Hitesh