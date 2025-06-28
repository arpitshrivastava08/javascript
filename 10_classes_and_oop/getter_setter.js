class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
    // get for see and set for overwriting the value
    // constructor bhi value set kar rha hai aur setter bhi to error aa raha hai
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);