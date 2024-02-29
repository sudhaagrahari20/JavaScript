let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("Ridhika", "abc@email.com");
let studen2 = new User("Aankit", "annkit@email.com");

let admin1 = new Admin("admin", "admin@colloge.com");


let teacher1 = new User("Dean", "dean@colloge.com");
