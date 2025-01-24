const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for of loop se ham object access nhi kara pate so we use for in loop 
// in for of loop value return kar rha hai but in for in loop key le rha hai vo ki index hai ya kisi me key hai 

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key); // 0 1 2 3 4 5 
    console.log(programming[key])  // js rb py java cpp
}

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "INDIA")

for (const key in map) {
    console.log(key); 
}
// for in loop se map ke under iteration nhi kiya ja sakta 