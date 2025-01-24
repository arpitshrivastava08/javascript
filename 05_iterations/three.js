// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1 ,2 ,3 ,4 ,5]

for (const num of arr) {
    console.log(num); 
}

const greetings = "Hello World !"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// Maps  ->  it contains unique pair (key,value)

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "INDIA")
// console.log(map);

// for of loop 
for(const key of map) {
    console.log(key); 
}
// output
// [ 'IN', 'INDIA' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

for(const [key, value] of map) {
    console.log(key, ':-', value); 
}
// output
// IN :- INDIA
// USA :- United State of America
// Fr :- France


/*
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}  // not iterable 
const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}  // not iterable 
  

for (const [key, value] of myObject) {
    console.log(key, ':-', value); 
}
// we cannot access object directly  not iterable
*/