

//syntax



// let promise=new Promise((resolve , reject)=>{

// })

// console.log(promise);






// let vaada = new Promise((resolve,reject)=>{

//     // resolve("mujhe chips mil gye");
//     reject("chips nahi h");



// })

// console.log(vaada); //pending 


let promise = new Promise((resolve,reject)=>{

    // resolve("chips h mere paas")
    // reject("chips nahi h")
    // resolve("chips h mere pass")
    // resolve("chips h mere pass")
    // resolve("chips h mere pass")
    // resolve("chips h mere pass")
    reject("chips nahi h")
    reject("chips nahi h")
    reject("chips nahi h")




})

//resolve - then-function
//reject - catch - function
// promise.then(function(data){
//     console.log(data);
// })

// promise.catch(function(error){
//     console.log(error);
// })


// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

promise.then(data=>console.log(data))
.then(data=>console.log(data))
.then(data=>console.log(data))
.then(data=>console.log(data))
.catch(error=>console.log(error))
.catch(error=>console.log(error))
.catch(error=>console.log(error))



console.log("hello world");