const name = "hitesh"
const repoCount = 50 

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new  String('hitesh-hc-com')

console.log(gameName.__proto__); 


console.log(gameName); 
console.log(gameName.length);
console.log(gameName.toUpperCase()) // original value is not changed 
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('t')); 

const newString = gameName.substring(0,4)  // hite
console.log(newString);
//if we pass negative value in substring then start from zero it ignore the negative value  

const anotherString = gameName.slice(-6,4)  // te
console.log(anotherString)
// in case of slice funcn if we pass negative value then it start from negative till second number , -1 is the last index

const newStringOne = "   hitesh   "
console.log(newStringOne); 
console.log(newStringOne.trim()); 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

//gameName = 'hitesh-hc-com'  // wrong
console.log(gameName.split('-'))
