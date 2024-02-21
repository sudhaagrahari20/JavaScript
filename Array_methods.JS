// let marvelHeroes = ["thor", "ironman", "spiderman"];
// let dcHeroes = ["superman", "batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// let marvelHeroes = ["thor", "ironman", "spiderman", "batman", "superman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2, 2, 101, 102);

//Add Element
//let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//arr.splice(2, 0, 101);
//arr.splice(3, 1);

//let companies = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"];
//companies.shift();
//companies.splice(2, 1, "Ola");
//companies.push("Amazon");

  

//function myFunction(msg, n) {
    //parameter -> input
    //console.log(msg  * n);
//} 
//myFunction("I love JS", 10); //argumemt
 

// function sum(x , y){
//     //local variables -> scope
//     s = x + y;
//     return s;
// }

// let val = sum(3, 4);
// console.log(val);


//Modern JS
// const arrowSum = (a, b) => {
//     console.log(a + b);
// }


// const printHello = () => {
//     console.log("Hello!");
// };   


// function countVowels(str) {
//     let count = 0;
//     for(const char of str){
//       if(
//         char == "a" || 
//         char == "e" || 
//         char == "i" || 
//         char == "o" || 
//         char == "u"
//       ){
//         count++;
//       }
//     }  
//     console.log(count);
// }


// Using arrow functions
// const countVowels = (str) => {
//     let count = 0;
//     for(const char of str){
//      if(
//         char == "a" || 
//         char == "e" || 
//         char == "i" || 
//         char == "o" || 
//         char == "u"
//      ){
//          count++;
//       }
//    }  
//     console.log(count);
// };


// let arr = [1,2, 3, 4, 5,6];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// let arr = [1,2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val);
// })

// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });


// let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num);
// });
 
let nums = [67, 52, 39];
let newArray = nums.map((val) => {
    return val * 2;
});
console.log(newArray);




