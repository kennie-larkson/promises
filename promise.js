const myPromise = new Promise((resolve, reject)=>{
    let success;
    if(success){
        resolve("We made it");
    }else{
        reject("Oops!");
    }
}).then(result => {
    console.log(result);
}).catch(error => { console.log(error)});