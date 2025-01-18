const accountId = 144543
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
let accountState;   // undefined 
//not recommended for var
accountCity = "Jaipur"

//now a days var is not used due to scope issue so uses let 

// accountId = 2 // not allowed

accountEmail = "hello@gmail.com"
accountPassword = "21212221"
accountCity = "Bengaluru"

console.log(accountEmail);

/*
Prefer not to use var
becuase of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
