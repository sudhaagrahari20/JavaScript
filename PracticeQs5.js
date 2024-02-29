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

let student1 = new User("Ridhika", "abc@email.com");
let studen2 = new User("Aankit", "annkit@email.com");


let teacher1 = new User("Dean", "dean@email.com");
