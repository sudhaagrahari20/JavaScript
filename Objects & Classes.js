const student ={
    fullName: "sudha agrahari",
    marks: 93.4,
    printMarks: function() {
        console.log("marks =", this.marks);
    },
}; 

const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const rahul = {
    salary: 50000,
    calTax() {
        console.log("tax rate is 20%");
    },
};
rahul.__proto__ = employee;


class ToyotaCar {
    constructor() {
        console.log("creating new objects");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar( );//constructor
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();//constructor

class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Enginner extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let sudhaObj = new Enginner();

