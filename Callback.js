console.log("one");
console.log("two");

setTimeout(() => {
    console.log("'hello!");
},    4000); //timeout

console.log("three");
console.log("four");

function sum (a,b) {
    console.log(a+b);
}

function calculator (a, b, sumCallback) { 
    sumCallback(a, b);
}
calculator(2, 5, sum);
     
