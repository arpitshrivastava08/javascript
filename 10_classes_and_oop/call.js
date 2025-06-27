function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(this, username)
    // Using call to set the context of 'this' to the current instance
    // hane lag rha hai ki call hua hai but hold nhi kar rha hai value to isliye call method use
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);