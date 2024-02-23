//let btn = document.querySelector("#btn");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// }; 

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
     
// };

let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked- handler1");    
});
btn1.addEventListener("click", () => {
    console.log("button1 was clicked- hanlder2");
});

const hanlder3 = () => {
    console.log("button1 was clicked - handler3");
}
btn1.addEventListener("click", hanlder3);
    
btn1.addEventListener("click", () => {
    console.log("button1 was clicked- hanlder4");
});
btn1.removeEventListener("click",hanlder3);



// div.onmouseover = () => {
//     console.log("you are inside div");
// };
