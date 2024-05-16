

// let promise = new Promise((resolve,reject)=>{
//     resolve("resolved promsie ")

// })


// // let p=promise.then(function(data){
// //     console.log(data);
// // })

// let p=promise.catch(()=>{

// })
// console.log(p);



let promise = new Promise((resolve , reject)=>{
    // resolve("resolved promsie ")
    // resolve("resolved promsie ")
    // resolve("resolved promsie ")
    // resolve("resolved promsie ")
    // resolve("resolved promsie ")

    reject("rejected promsie ")
    reject("rejected promsie ")
    reject("rejected promsie ")
    reject("rejected promsie ")

})

promise.then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).then((data)=>{
    console.log(data);
    return data;
}).catch((eror)=>{
    console.log(eror);
    throw new Error("cutsom errro")
   
}).catch((eror)=>{
    console.log(eror);
    throw new Error("cutsom errro")
    

    
}).catch((eror)=>{
    console.log(eror);
    throw new Error("cutsom errro")
}).catch((eror)=>{
    console.log(eror);
    throw new Error("cutsom errro")
}).catch((eror)=>{
    console.log(eror);
    throw new Error("cutsom errro")
})