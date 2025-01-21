/*
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); 

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// OPTION 1
// const obj3 = {obj1, obj2}  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

// OPTION 2
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3); 

// OPTION 3
const obj3 = {...obj1, ...obj2}
console.log(obj3); 


const users = [
    {
        id : 1,
        email : "ha@gmail.com"
    },
    {
        id : 1,
        email : "ha@gmail.com"
    },
    {
        id : 1,
        email : "ha@gmail.com"
    },
    {
        id : 1,
        email : "ha@gmail.com"
    },
    
]

users[1].email
console.log(tinderUser); 

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
*/


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// if we want to change a name then {courseInstructor : Instructor}
// then use Instructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor); 
console.log(instructor);


/*
// in react we use props. so instead this use {}
// const navbar = (props.company) => {
// }
// so use
// const navbar = ({company}) => {
// }
// navbar(company = "hitesh")
*/


// JASON
// in this no name and all key is in string so write " "
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]