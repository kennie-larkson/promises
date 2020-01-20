//this creates a Promise using the Promise constructor which takes a callback
//function with two parameters (resolve and reject) as arguments
const myPromise = new Promise((resolve, reject)=>{
    let success;
    if(success){
        resolve("We made it");
    }else{
        reject("Oops!");
    }
});