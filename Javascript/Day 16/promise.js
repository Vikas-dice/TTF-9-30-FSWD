

// let promise = new Promise((resolve ,reject)=>{

//     resolve("resolved promise ")
// })

// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



let promise1 = new Promise((resolve , reject)=>{


    setTimeout(() => {
        resolve("resolved promise 1")
        
    }, 4000);
    for(let i=0;i<=20;i++){
        console.log("vikas",i);
    }
})

promise1.then(()=>{
    console.log("test 1");
}).catch((error)=>{
    console.log(error);
})
let promise2 = new Promise((resolve , reject)=>{


    setTimeout(() => {
        resolve("resolved promise 2")
        
    }, 0);

})

promise2.then(()=>{
    console.log("test 2");
}).catch((error)=>{
    console.log(error);
})
let promise3 = new Promise((resolve , reject)=>{


    setTimeout(() => {
        resolve("resolved promise 3")
        
    }, 1000);
})

promise3.then(()=>{
    console.log("test 3");
}).catch((error)=>{
    console.log(error);
})
let promise4 = new Promise((resolve , reject)=>{


    setTimeout(() => {
        resolve("resolved promise 4")
        
    }, 2000);
})

promise4.then(()=>{
    console.log("test 4");
}).catch((error)=>{
    console.log(error);
})


console.log("ends here");
for(let i=0;i<50;i++){
    console.log(i);
}