class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sapiens";

    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}
class Enginner extends Person {
    constructor(branch){
        console.log("enter child constructor");
        super();//to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("solve problems. build something");
    }
}
class Doctor extends Person {
    work(){
        console.log("treat patients");
    }
}
let sudhaObj = new Enginner("Information Technology");
    

 
