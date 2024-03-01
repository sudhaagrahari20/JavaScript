 let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("'some error occurred");
 });


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("success");
//             reject("error");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);   
//     });      
// }





























