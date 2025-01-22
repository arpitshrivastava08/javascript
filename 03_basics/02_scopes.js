/*
let a = 10
const b = 20
var c = 30

console.log(a); 
console.log(b); 
console.log(c); 
// 10 20 30 
*/


/*
if(true) {
    let a = 10 
    const b = 20
    var c = 30
}
// scope of and b is within if so not access outside
// but c is accessed outside

// console.log(a);
// console.log(b);
console.log(c);
*/


/*
// real life problem 
var c = 300
if(true){
    let a = 10
    const b = 20
    c = 30 
}
console.log(c); 
// if we access c then it will return 30 which is not desired output so we nt use var 
*/

/*
let a = 300 // global scope
if(true) {
    let a = 10
    const b = 20
    console.log("Inner : ", a);  // 10
}
console.log(a);  // 300 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
// jo ham console me jakar scope delhenge aur jo node me dekhenge vo alag hai 
*/


/*
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);  // website scope khatam

    two()
}
one()
*/


/*
if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = "youtube"
        console.log(username + website); 
    }
    // console.log(website);  // website ka scope khatam 
}
// console.log(username);  // username scope ends 
*/


// ****************interesting*****************

/*
function addone(num) {
    return num  + 1; 
}
console.log(addone(5)); 

const addTwo = function(num) {
    return num + 2; 
}
console.log(addTwo(5)); 
// 6  7 
*/

/*
console.log(addone(5))
function addone(num) {
    return num  + 1; 
}  // 6 

console.log(addTwo(5));  // we cannot access before it 
const addTwo = function(num) {
    return num + 2; 
}  // error 
*/