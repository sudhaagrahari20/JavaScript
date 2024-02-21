// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName + fullName.length;
// console.log(username);


// let marks = [95,83,74,63,84];
// console.log(marks);
// console.log(marks.length); 


// let heroes = ["batman", "thor", "ironman", "hulk", "spiderman"];
// for(let i = 0; i < heroes.length; ++){
//     console.log(heroes[i);
// }


//for-of
// for(let hero of heroes){
//     console.log(hero);
// }


// let cities = ["pune", "delhi", "hyderbad", "mumbai", "kanpur"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }



// let marks = [85,97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// } 
// let avg = sum / marks.length;
// console.log(`avg marks of class = ${avg}`);


let items = [250, 645, 300, 900, 50];
for(let i =0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log(items);
